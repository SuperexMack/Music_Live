import { About } from "../About/About";
import { Navbar } from "../Navbar/Navbar";
import musicVideo from "./music.mp4";

export function LandingPage(){
    return(
        <>
        <Navbar />
        <div className="h-auto w-full bg-gradient-to-b from-blue-900 via-gray-800 to-teal-900 flex flex-col items-center text-center py-20 px-5">
            <h1 className="text-[50px] sm:text-[70px] md:text-[90px] font-extrabold text-teal-200 mt-10 tracking-widest leading-tight">
                Welcome to the <span className="text-blue-400 hover:text-teal-300 transition duration-300">World of Music</span>
            </h1>
            <h1 className="text-[50px] sm:text-[70px] md:text-[90px] font-extrabold text-teal-200 leading-tight">
                And <span className="text-blue-400 hover:text-teal-300 transition duration-300">Live Streams</span>
            </h1>
            <video className="h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-[800px] rounded-xl shadow-xl mt-10 border-4 border-teal-700 transition-transform duration-500 hover:scale-105" controls src={musicVideo} />
        </div>
        <About></About>
        </>
    );
}
