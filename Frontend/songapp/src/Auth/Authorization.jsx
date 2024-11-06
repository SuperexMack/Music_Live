import "../index.css"
import { useNavigate } from "react-router-dom"

export function Authorization(){
    const property= "border-2 border-black p-3 w-full sm:w-[80%] md:w-[70%] rounded-lg"
    const navigate = useNavigate()
    const changeClient = () => {
        navigate("/login")
    }
    return (
        <>
            <div className="h-screen w-full flex justify-center items-center px-4 sm:px-0">
                <div className="rounded-lg h-auto sm:h-[700px] w-full sm:w-[500px] flex flex-col items-center space-y-6 sm:space-y-10 p-4 sm:p-0">
                    <p className="text-[30px] sm:text-[40px] font-bold mt-10 sm:mt-20 text-center">User Sign-in</p>
                    <input placeholder="Enter Your Email" className={property}></input>
                    <input placeholder="Enter your Phone Number" className={property}></input>
                    <input placeholder="Enter your Password" className={property}></input>
                    <div className="space-y-4 text-[16px] sm:text-[20px] font-bold flex flex-col items-center sm:items-stretch">
                        <button onClick={changeClient} className="p-3 sm:p-4 bg-green-600 rounded-lg text-white auth-buttons w-full">Already have an account?</button>
                    </div>
                    <div className="w-full sm:w-[400px] text-center sm:text-left">
                        <p className="text-sm sm:text-base">By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
