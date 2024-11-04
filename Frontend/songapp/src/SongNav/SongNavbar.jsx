import { useState } from "react";
import axios from "axios";

export function SongNavbar() {
  const [Title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const API_KEY = "AIzaSyDeP_3n0wyySHYRk1_MGk76devXQS5Ls_g";

  const searchVideo = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            maxResults: 1,
            q: Title,
            key: API_KEY,
            type: "video",
          },
        }
      );

      if (response.data.items.length > 0) {
        const videoId = response.data.items[0].id.videoId;
        const videoLink = `https://www.youtube.com/embed/${videoId}`;
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
            onClick={searchVideo}
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

      <div className="flex justify-center items-center bg-gray-800 w-full h-32">
        <h1 className="text-lg text-gray-300">@Copyright 2024-2050</h1>
      </div>
    </>
  );
}
