import { jwtDecode } from "jwt-decode"; 
import { useEffect, useState } from "react";
import Photo from "./newape.png";
import axios from "axios";

export function Profile() {
  const [userId, setUserId] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const findUserID = () => {
    let findId = localStorage.getItem("authorization");
    if (findId) {
      try {
        const Getid = jwtDecode(findId);
        setUserId(Getid.getUserId);
      } catch (error) {
        console.log("something went wrong " + error);
      }
    }
  };

  useEffect(() => {
    findUserID();
  }, []);

  useEffect(() => {
    const getdata = async () => {
      await axios
        .get(`http://localhost:9000/v1/userALLData/${userId}`)
        .then((response) => {
          setEmail(response.data.email);
          setPhoneNumber(response.data.phoneNumber);
        })
        .catch((error) => {
          console.log("something went wrong " + error);
        });
    };
    if (userId) getdata();
  }, [userId]);

  return (
    <>
      {userId ? (
        <div className="bg-blue-600 w-full h-[200px] flex justify-center">
          <div className="h-[400px] w-full max-w-[900px] bg-slate-100 shadow-lg mt-[100px] rounded-lg">
            <div className="flex justify-center -mt-[50px]">
              <img
                className="h-[150px] sm:h-[180px] md:h-[200px] w-[150px] sm:w-[180px] md:w-[200px] border-4 border-white rounded-full"
                src={Photo}
                alt="User profile"
              />
            </div>
            <div className="flex flex-col items-center text-center text-[20px] sm:text-[25px] md:text-[30px]">
              <p className="text-[40px] sm:text-[30px] font-bold">User Profile</p>
              <p className="font-semibold">UserId - {userId}</p>
              <p className="font-mono text-[20px]">Phone Number - {phoneNumber}</p>
              <p className="font-mono text-[20px]">Email - {email}</p>
              <p className="font-light text-[20px]">
                Share your Room Code - https://music-live-pi.vercel.app/{userId}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full bg-red-500 flex justify-center items-center">
          <p className="text-[50px] sm:text-[40px] md:text-[60px] text-white font-bold">
            Please Sign-in/Login......
          </p>
        </div>
      )}
    </>
  );
}
