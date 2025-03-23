import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";

export function SongNavbar() {
  const {id} = useParams()
  const [Title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [songQueue, setSongQueue] = useState([])
  const [songIndex , setSongIndex] = useState(0)


  // now using this we are going to get all the song with it's name and it's id

    const instantCallerSongs = async()=>{
    await axios.get(`http://localhost:9000/v1/songs/getAllSongs/${id}`)
    .then((response)=>{
      console.log(response.data.allSongs)
      setSongQueue(response.data.allSongs)
      toast.success("All songs fetched successfully")
    })
    .catch((error)=>{
      console.log("something went wrong while getting the songs" + error)
    })
    }
    
  

    useEffect(()=>{
      instantCallerSongs()
    },[])


  // using this we are going to add the song to the database

  
useEffect(() => {
  if (songQueue.length <= 0) {
    return;
  }
  const caller = async () => {
    const getSongId = songQueue[songIndex];

    if (!getSongId) {
      console.log("No song found at the current index.");
      return;
    }

    await searchVideo(getSongId.songName);
    setTimeout(async () => {
      await deleteSong(getSongId.id);
      setSongIndex((prev) => prev + 1);
    }, 30000);
  };

  caller();
}, [songQueue, songIndex]);


const sendSongToBackend = async () => {
  try {
    await axios.post(`http://localhost:9000/v1/songs/AddSong/${id}`, {
      songName: Title,
    });
    toast.success("Song added successfully!");
    setTitle("");

    
    instantCallerSongs();
  } catch (error) {
    console.log("Error while adding the song: " + error);
    toast.error("Error adding the song: " + error);
  }
};


  const API_KEY = "";

  const searchVideo = async (q) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            maxResults: 1,
            q: q,
            key: API_KEY,
            type: "video",
          },
        }
      );

      if (response.data.items.length > 0) {
        const videoId = response.data.items[0].id.videoId;
        const videoLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        setLink(videoLink);
        setTitle("");
      } else {
        setLink("");
        console.log("No videos found.");
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };


  // Deleting the song After some time using the id

  const deleteSong = async(myid)=>{
    try{
      let id = parseInt(myid)
      await axios.delete(`http://localhost:9000/v1/songs/deleteSong/${id}`)
      toast.success("Song From database deleted successfully")

    }
    catch(error){
      console.log("Some error occured while deleting the data " + error)
      toast.error("Some error occured while deleting the data " + error)
    }
    
  }

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[120px] w-full flex justify-center items-center px-4">
        <div className="space-x-4 flex flex-col sm:flex-row items-center">
          <input
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Search Your Song"
            className="h-12 w-full sm:w-72 border-2 border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            onClick={sendSongToBackend}
            className="bg-black text-white rounded-lg px-4 py-2 w-full sm:w-24 mt-4 sm:mt-0 hover:bg-gray-800 transition duration-200 ease-in-out"
          >
            Search
          </button>
        </div>
      </div>

      <div className="bg-gray-900 w-full flex justify-center items-center min-h-screen p-4">
        {link ? (
          <div className="bg-gray-800 h-80 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={link}
              title="YouTube Video Player"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="bg-gray-700 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-20 rounded-lg flex justify-center items-center text-2xl font-semibold text-white shadow-lg">
            <h1>No video requested</h1>
          </div>
        )}
      </div>

      <div>
        <h1>display song</h1>
        {songQueue.map((song,index)=>(
          <div key={index}> 
            <h1>{song.id}</h1>
            <h1>{song.songName}</h1>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center bg-gray-800 w-full h-32">
        <h1 className="text-lg text-gray-300">@Copyright 2024-2050</h1>
      </div>
      <ToastContainer />
    </>
  );
}
