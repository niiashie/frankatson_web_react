import { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function NewsPage(){
    
    const [showAddNews,setAddNews] = useState("false");
    const navigate = useNavigate();

    useEffect(() => {
        //Runs on every render
        
        try {
           var role = localStorage.getItem("role");
           if(role == "staff"){
            
            setAddNews("true");
           }
           else{
            setAddNews("false"); 
           }
         } catch (error) {
            setAddNews("false"); 
           console.error(error.message); //raises the error
          // alert("error: localstorage");
         }
        
      
      });

    return <div className="w-[100vw] h-[100vh] relative ">

        <div className="w-[100vw] h-[100vh] bg-white flex flex-col ">
        <div className="gradient h-[80px] w-full relative drop-shadow-md">
        <div className='px-2 py-2  left-[25px] top-[7px] absolute flex flex-row items-center'>
         <img src={logo}  className="w-[50px] h-[50px] rounded-[10px] drop-shadow-md"></img>
         <label className='font-poppins_medium ml-3  text-2xl text-white'>Frankatson</label>

        </div>
        <div className='w-full py-2  my-[20px]  flex flex-row items-center justify-center'>
            <label onClick={() => navigate(-1)} className='font-poppins_regular text-sm text-white hover:cursor-pointer'>Home</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="size-4 text-white ml-[15px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            <label className='font-poppins_regular text-lg text-white  ml-[10px]'> News </label>
        </div>
       </div>
        </div>
        {showAddNews == "true"?<div className="w-[200px] h-[80px] right-[20px] bottom-[20px] absolute  items-center justify-center flex">
           <Link to = "/news/add" style={{ background: "rgb(200,36, 113)" }} className="w-[170px] h-[45px] font-poppins_regular rounded-[25px] drop-shadow-lg flex flex-row items-center justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <label className="text-white font-poppins_regular text-sm ml-1">Add News</label>
           </Link>
        </div>: <div></div>}
        

    </div>
}

export default NewsPage;