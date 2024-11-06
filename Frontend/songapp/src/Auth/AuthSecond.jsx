import "../index.css";
import { useNavigate } from "react-router-dom";

export function AuthSecond() {
    const inputStyle = "border border-transparent p-3 w-full sm:w-[80%] md:w-[70%] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 bg-white shadow-md";
    const navigate = useNavigate();
      
    const changeClient = () => {
        navigate("/register");
    };
     
    return (
        <div className="h-screen w-full flex justify-center items-center px-4 sm:px-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
            <div className="rounded-lg shadow-2xl h-auto sm:h-[700px] w-full sm:w-[500px] flex flex-col items-center space-y-6 sm:space-y-10 p-8 sm:p-10 bg-white bg-opacity-90 backdrop-blur-lg">
                <p className="text-[30px] sm:text-[40px] font-bold mt-6 sm:mt-10 text-center text-gray-800">
                    User Login
                </p>
                
                <input placeholder="Enter Your Email" className={inputStyle} type="email" />
                <input placeholder="Enter Your Phone Number" className={inputStyle} type="tel" />
                <input placeholder="Enter Your Password" className={inputStyle} type="password" />
                
                <button 
                    onClick={changeClient} 
                    className="p-3 sm:p-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 rounded-lg text-white font-semibold w-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Don’t have an account?
                </button>
                
                <div className="w-full sm:w-[400px] text-center sm:text-left">
                    <p className="text-sm sm:text-base text-gray-700">
                        By proceeding, you consent to receive calls, WhatsApp, or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.
                    </p>
                </div>          
            </div>
        </div>
    );
}
