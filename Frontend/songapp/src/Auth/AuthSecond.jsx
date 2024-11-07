import "../index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AuthSecond() {
    const inputStyle = "border border-gray-300 p-3 w-full sm:w-[80%] md:w-[70%] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 bg-white shadow-sm";
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading , setLoading] = useState(false)

    const changeClient = () => {
        navigate("/register");
    };

   

    const loginUser = async() => {
        if (!/^\d{10}$/.test(phoneNumber)) {
            toast.error("Please enter a valid 10-digit phone number.", { position: "top-center" });
            return;
        }
        setLoading(true)
        await axios.post("http://localhost:9000/v1/UserLogin",{
            email : email,
            password : password,
            phoneNumber:phoneNumber
        })
        .then((response)=>{
            let getToken = response.data.token
            let msg = response.data.msg
            if(msg === "No such type of user Exist || It requires a Sign up"){
            setLoading(false)
            toast.error(msg, { position: "top-right" });
            return
            }
            else{
                localStorage.setItem("authorization" , "Bearer " + getToken)
                setLoading(false)
                toast.success(msg, { position: "top-right" });
                setTimeout(() => {
                    navigate("/");
                }, 4000);
            }

        })
        .catch((error,response)=>{
            let getInfo = response.data.msg
            console.log("Something went wrong while register " + error)
            setLoading(false)
            toast.error(msg + error)
        })
        
    };

    return (
        <>


      {loading ? (
       <div className="h-screen flex justify-center items-center bg-black">
       <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
           Loading...
       </h1>
   </div>
   
      ):(
        <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 sm:px-0">
        <div className="rounded-lg shadow-2xl h-auto sm:h-[700px] w-full sm:w-[500px] flex flex-col items-center space-y-6 p-8 sm:p-10 bg-white bg-opacity-90 backdrop-blur-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mt-4 sm:mt-10">
                User Login
            </h2>
            
            <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" className={inputStyle} type="email" />
            <input required value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Enter Your Phone Number" className={inputStyle} type="tel" />
            <input required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password" className={inputStyle} type="password" />
            
            <div className="flex flex-col w-full space-y-4 mt-4">
                <button 
                    onClick={loginUser} 
                    className="py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 rounded-lg text-white font-semibold w-full transition duration-300 transform hover:scale-105 shadow-md">
                    Login
                </button>
                
                <button 
                    onClick={changeClient} 
                    className="py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 rounded-lg text-white font-semibold w-full transition duration-300 transform hover:scale-105 shadow-md">
                    Don’t have an account?
                </button>
            </div>
            
            <div className="text-center w-full text-sm sm:text-base text-gray-600 mt-4">
                <p>
                    By proceeding, you consent to receive calls, WhatsApp, or SMS/RCS messages, including by automated means, from our company and its affiliates to the number provided.
                </p>
            </div>          
        </div>
    </div>
   
      )}

<ToastContainer />
        </>
    );
}
