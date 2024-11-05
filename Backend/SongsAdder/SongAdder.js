const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const express = require("express")
const router = express.Router()
const zod = require("zod")


const songChecker = zod.object({
    songName : zod.string()
})

router.post("/AddSong" , async(req,res)=>{

    const {success} = songChecker.safeParse(req.body)

    if(!success){
        return res.json({
            msg:"Your data is not correct"
        })
    }

    const {songName} = req.body
    if(songName.length==0){
        return res.json({
            msg:"No song Entered by the user"
        })
    }

    // I will hard code the value of duration in miliseconds

    try{
      let songInserted = await prisma.songName.create({
        data:{
        songName : songName,
        duration : "120000"
        }
      })
      if(songInserted){
        return res.json({
            msg : "Song Inserted successfully"
        })
      }
    }
    
    catch(error){
        return res.json({
            msg:"Something went wrong while adding song"
        })
    }
    
})

// now we are going to fetch all the songs

router.get("/getAllSongs" , async(req,res)=>{
    let findAllSongs = await prisma.songName.findMany({})
    return res.json({
        msg : "All the songs appreared here",
        allSongs:findAllSongs.map((songsName)=>
            (songsName)
        )
    })
})


router.delete("/deleteSong/:id" , async(req,res)=>{

    let songId = req.params.id
    try{
        await prisma.songName.delete({
            where:{
                id:songId
            }
        })
        return res.json({
            msg : "Song Successfully deleted from the database"
        })
    }

    catch(error){
        return res.json({
            msg : "Something went wrong while deleting the song"
        })
    }
    
})

module.exports = router