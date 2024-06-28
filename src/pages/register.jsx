import { useState } from "react";
import Loader from "../components/loader"
import logo from "../assets/logo.jpeg";
import { useNavigate } from 'react-router-dom';

function RegisterPage(){
    
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState("password");
    const [confirmpasswordType, setConfirmPasswordType] = useState("password");
    const [passwordVisibility, setPasswordVisibility] = useState("false");
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState("false");
    const [btnLoading,setLoader] = useState("false");

    function confirmPasswordToggle(){
   
        if(confirmPasswordVisibility == "false"){
            setConfirmPasswordVisibility('true'); 
            setConfirmPasswordType("text");
            //temp.type = "text";
        }
        else{
            setConfirmPasswordVisibility("false");
            setConfirmPasswordType("password");
            //temp.type = "password";
        }
    }

    function createAccount(){
      
    }

    function passwordToggle(){
        let temp = document.getElementById("typepass");
        if(passwordVisibility == "false"){
            setPasswordVisibility('true'); 
            setPasswordType("text");
            //temp.type = "text";
        }
        else{
            setPasswordVisibility("false");
            setPasswordType("password");
            //temp.type = "password";
        }
    }


     
    return <div className="w-[100vw] h-[100vh] bg-white flex flex-col items-center justify-center overflow-y-scroll">
       <img src={logo} className="w-[80px] h-[80px] rounded-[15px] drop-shadow-md"></img>
       <div className="w-[370px] py-[10px] px-[15px] bg-gray-100 rounded-[15px] drop-shadow-md mt-4 flex flex-col">
          <label className="font-poppins_light text-gray-400 ml-[10px] mt-[15px] text-sm">Name</label>
           <div className="w-full mt-[5px] h-[45px] rounded-[10px] bg-white border-gray-200 border-[1px] flex flex-row">
              <div className="w-[50px] h-[45px]  items-center justify-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <input type="text" id="name" name="name" placeholder="Enter your name" className="flex-1 mx-2 focus:outline-none font-poppins_light text-sm"></input>
            </div>
           <label className="font-poppins_light text-gray-400 ml-[10px] mt-[10px] text-sm">Email</label>
           <div className="w-full mt-[5px] h-[45px] rounded-[10px] bg-white border-gray-200 border-[1px] flex flex-row">
              <div className="w-[50px] h-[45px]  items-center justify-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              </div>
              <input type="text" id="email" name="email" placeholder="Enter your email" className="flex-1 mx-2 focus:outline-none font-poppins_light text-sm"></input>
            </div>
           <label className="font-poppins_light text-gray-400 ml-[10px] mt-[10px] text-sm">Location Address</label>
           <div className="w-full mt-[5px] h-[45px] rounded-[10px] bg-white border-gray-200 border-[1px] flex flex-row">
              <div className="w-[50px] h-[45px]  items-center justify-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

              </div>
              <input type="text" id="location" name="location" placeholder="Enter your location address" className="flex-1 mx-2 focus:outline-none font-poppins_light text-sm"></input>
            </div>
            <label className="font-poppins_light text-gray-400 ml-[10px] mt-[10px] text-sm">Password</label>
            <div className="w-full mt-[5px] h-[45px] rounded-[10px] bg-white border-gray-200 border-[1px] flex flex-row">
              <div className="w-[50px] h-[45px]  items-center justify-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
               
              </div>
              <input type={passwordType} id="password" name="fname" placeholder="Enter your password" className="flex-1 mx-2 focus:outline-none font-poppins_light text-sm"></input>
              <div className="w-[45px] h-[45px]  flex items-center justify-center">
                {passwordVisibility == "false" ?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" onClick={()=> passwordToggle()} strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400 hover:cursor-pointer">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                 </svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" onClick={()=> passwordToggle()} strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400 hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                }
              </div>
            </div>
            <label className="font-poppins_light text-gray-400 ml-[10px] mt-[10px] text-sm">Confirm Password</label>
            <div className="w-full mt-[5px] h-[45px] rounded-[10px] bg-white border-gray-200 border-[1px] flex flex-row">
              <div className="w-[50px] h-[45px]  items-center justify-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                </svg>
               
              </div>
              <input type={confirmpasswordType} id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" className="flex-1 mx-2 focus:outline-none font-poppins_light text-sm"></input>
              <div className="w-[45px] h-[45px]  flex items-center justify-center">
                {confirmPasswordVisibility == "false" ?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" onClick={()=> confirmPasswordToggle()} strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400 hover:cursor-pointer">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                 </svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" onClick={()=> confirmPasswordToggle()} strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400 hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                }
              </div>
            </div>
            <button style={{ background:"rgb(200,36, 113)" }} onClick = {() => createAccount()} className="w-full rounded-[10px] h-[45px] text-white font-poppins_light mt-[20px] drop-shadow-md">
                {btnLoading == "false" ? "Create Account" : <Loader/>}
            </button>
            <div className="w-full h-[30px] mt-[10px] flex flex-row items-center justify-center">
                <label className="text-gray-400 text-xs font-poppins_light">Already Registered?</label>
                <label onClick={() => navigate(-1)} style={{ color:"rgb(200,36, 113)" }} className="ml-[5px] cursor-pointer font-poppins_regular text-sm">Sign In</label>
                
            </div>
        </div> 
    </div>
}

export default RegisterPage;