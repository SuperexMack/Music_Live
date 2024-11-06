const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const express = require("express")
const router = express.Router()
const zod = require("zod")


const songChecker = zod.object({
    songName : zod.string()
})

router.post("/AddSong/:id" , async(req,res)=>{

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
      let getStreamerId = parseInt(req.params.id)
      let songInserted = await prisma.songName.create({
        data:{
        songName : songName,
        duration : 120000,
        authorId : getStreamerId
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

router.get("/getAllSongs/:id" , async(req,res)=>{

    let liveSteamerId = parseInt(req.params.id)
    let findAllSongs = await prisma.songName.findMany({
        where:{
            authorId : liveSteamerId
        }
    })
    return res.json({
        msg : "All the songs appreared here",
        allSongs:findAllSongs.map((songsName)=>
            (songsName)
        )
    })
})


router.delete("/deleteSong/:id" , async(req,res)=>{

    let songId = parseInt(req.params.id , 10)
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