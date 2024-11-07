import { useEffect, useState } from "react";
import solanaIcon from "./musiic.webp";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [online , setOnline] = useState(false)
 
  const navigate = useNavigate()

  useEffect(()=>{
    const getToken = localStorage.getItem("authorization")
    if(getToken){
      setOnline(true);
    }
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Logout = ()=>{
   
    localStorage.removeItem("authorization")
    toast.success("Logout")
    setOnline(false)
    setTimeout(navigate("/") , 3000)
    
  }

  return (
    <>
      <div className="bg-[#192A56] h-[80px] w-full flex items-center px-4 md:px-8">
        <img src={solanaIcon} className="h-[70px] md:h-[80px] rounded-lg" alt="Solana Icon" />
        <ul className="hidden md:flex text-white items-center space-x-6 md:space-x-9 ml-auto mr-8 text-[18px] md:text-[25px] font-semibold">
          
          {online ?(
            <>
             <li><Link to="/go/:id">Organize Live-Stream</Link></li>
             <li><Link to="/profile">Your Profile</Link></li>
             <li><Link>Home</Link></li>
             <li className="hover:cursor-pointer" onClick={Logout}>LogOut</li>
            </>
          ) : (
           <>
            <li><Link>Home</Link></li>
           <li><Link to="/login">Login</Link></li>
           <li><Link to="/register">SignUp</Link></li>
           </>
          )}
          
        </ul>

        
        <div className="md:hidden ml-auto mr-4 text-white cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

       
        {isMenuOpen && (
          <ul className="absolute top-[80px] left-0 w-full bg-[#192A56] text-white flex flex-col items-center space-y-6 py-4 text-[18px] font-semibold z-10">
          {online ?(
            <>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/profile">Your Profile</Link></li>
             <li><Link to="/go/:id">Organize Live-Stream</Link></li>
             <li onClick={Logout}>LogOut</li>
            </>
          ) : (
           <>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/login">Login</Link></li>
           <li><Link to="/register">SignUp</Link></li>
           </>
          )}
          </ul>
        )}
      </div>
    </>
  );
}
