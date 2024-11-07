const jwt = require("jsonwebtoken")
const path = require("path")
require("dotenv").config({path:path.resolve(__dirname , "../env")})

const SECRET_POINT = process.env.SECRET_POINT

const userMiddleWare = (req,res,next)=>{
   let getToken = req.headers.authorization
   if(!getToken.startsWith("Bearer ") || !getToken){
    return res.json({
        msg:"User need to sing-in || Login"
    })
   }

   else{
    // aab id le le 
    let getValue = getToken.split(" ")[1]

    try{
        let getUserNewId = jwt.verify(getValue , SECRET_POINT)
        if(getUserNewId.getUserId){
            req.newUserid = getValue.getUserId
            next()
        }
        else{
            return res.json({
                msg : "Something went wrong inside the middleware"
            })
        }
    }
    
    catch(error){
        console.log("Something went wrong with the middleware " + error)
        return res.json({
            msg : "Something went wrong with the middleware"
        })
    }

   }
}

module.exports = userMiddleWare