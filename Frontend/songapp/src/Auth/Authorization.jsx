import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export function Authorization() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading , setLoading] = useState(false)

    const inputStyle = "border border-transparent p-3 w-full sm:w-[80%] md:w-[70%] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 bg-white shadow-md";
    const navigate = useNavigate();
    
    const changeClient = () => {
        navigate("/login");
    };

    

    const handleRegister = async() => {
        if (!/^\d{10}$/.test(phoneNumber)) {
            toast.error("Please enter a valid 10-digit phone number.", { position: "top-right" });
            return;
        }

        setLoading(true)
        await axios.post("http://localhost:9000/v1/UserRegister",{
            email : email,
            password : password,
            phoneNumber:phoneNumber
        })
        .then((response)=>{
            let getToken = response.data.token
            let getResponse = response.data.msg
            if(getResponse === "User Already available with same email"){
            setLoading(false)
            toast.error(getResponse, { position: "top-right" });
            return
            }
            localStorage.setItem("authorization" , "Bearer " + getToken)
            setLoading(false)
            toast.success(getResponse, { position: "top-right" });
            setTimeout(() => {
                navigate("/");
            }, 4000);
        })
        .catch((error)=>{
            console.log("Something went wrong while register " + error)
            setLoading(false)
            toast.error("Something went wrong while register " + error)
        })
        
    };

    return (
        <>
        {loading ?(
        <div className="h-screen flex justify-center items-center bg-black">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Loading...
        </h1>
    </div>
    
        ):(
            <>
        <div className="h-screen w-full flex justify-center items-center px-4 sm:px-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                <div className="rounded-lg shadow-2xl h-auto sm:h-[700px] w-full sm:w-[500px] flex flex-col items-center space-y-6 sm:space-y-10 p-8 sm:p-10 bg-white bg-opacity-90 backdrop-blur-lg">
                    <h2 className="text-[30px] sm:text-[40px] font-bold mt-6 sm:mt-10 text-center text-gray-800">
                        Welcome !
                    </h2>
                    
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter Your Email" 
                        className={inputStyle} 
                        type="email" 
                        required
                    />
                    <input 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        placeholder="Enter Your Phone Number" 
                        className={inputStyle} 
                        type="tel" 
                        required
                    />
                    <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter Your Password" 
                        className={inputStyle} 
                        type="password" 
                        required
                    />

                    <div className="space-y-4 w-full sm:w-[80%] flex flex-col mt-4">
                        <button 
                            onClick={changeClient} 
                            className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 rounded-lg text-white font-semibold w-full transition duration-300 transform hover:scale-105 shadow-lg">
                            Already have an account?
                        </button>

                        <button 
                            onClick={handleRegister} 
                            className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 rounded-lg text-white font-semibold w-full transition duration-300 transform hover:scale-105 shadow-lg">
                            Register
                        </button>
                    </div>
                    
                    <div className="w-full sm:w-[400px] text-center sm:text-left mt-4">
                        <p className="text-sm sm:text-base text-gray-700">
                            By proceeding, you consent to receive calls, WhatsApp, or SMS/RCS messages, including by automated means, from our affiliates to the number provided.
                        </p>
                    </div>
                </div>
            </div>
            
           
            </>
        )} 
         <ToastContainer />
        </>
    );
}
