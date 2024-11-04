const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const jwt = require("jsonwebtoken")
const express = require("express")
const zod = require("zod")
const router = express.Router()
const path  = require("path")
require("dotenv").config({path:path.resolve(__dirname , "../env")})
const SECRET_POINT = process.env.SECRET_POINT

console.log("The private key is : " + SECRET_POINT)

const userChecker = zod.object({
    email : zod.string(),
    password:zod.string(),
    phoneNumber : zod.string()
})

router.post("/UserRegister" , async(req,res)=>{
    const {success} = userChecker.safeParse(req.body)
    if(!success) return res.json({msg:"Your data format is not correct"})
    else{
      // we will store the data 

      const {email , phoneNumber , password} = req.body
      let findUserusingEmail = await prisma.user.findUnique({
        where:{email:email}
      })
      if(findUserusingEmail){
        return res.json({msg:"User Already available with same email"})
      }



      try{
       
        console.log("i will store")
        let storeNewUserData = await prisma.user.create({
          data:{
              email:email,
              phoneNumber:phoneNumber,
              password:password
          }
        })

        console.log("i stored")
        let getUserId = storeNewUserData.id
        const giveToken = jwt.sign({getUserId} , SECRET_POINT)
        console.log("succees")
        return res.json({token : giveToken , msg:"Welcome to the site sir!!"})

      }

      catch(err){
        console.log("failed")
        res.json({msg : "Something went wrong" + err})
      }
     
    }
})


router.post("/UserLogin" , async(req,res)=>{
    let {success} = zod.safeParse(req.body)
    if(!success) return res.json({msg:"Your Data is unaccurate"})
    else{
      try{
        let {email} = req.body
        let findUserusingEmail = await prisma.user.findUnique({
          where:{email:email}
        })
        if(!findUserusingEmail){
          return res.json({msg:"No such type of user Exist || It requires a Sign up"})
        }
        else{
            let getUserId = findUserusingEmail.id
            const giveToken = jwt.sign({getUserId} , SECRET_POINT)
            return res.json({token : giveToken , msg:"Welcome Back Sir"})
        }
      }
      catch(err){
        return res.json({
          msg :"something went wrong" + err
        })
      }
    }
  })


module.exports = router