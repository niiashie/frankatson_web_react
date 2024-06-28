import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import { useEffect,useState } from "react";


function NavigatorComponent(){
   
   const [dropdown,setDropdown] = useState("false");
   

   useEffect(() => {
      //Runs on every render
      
      try {
         var x = localStorage.getItem("name");
         if(x != null){
           setDropdown("true");
         }
         else{
            setDropdown("false"); 
         }
       } catch (error) {
         setDropdown("false"); 
         console.error(error.message); //raises the error
        // alert("error: localstorage");
       }
      
      
      // if(localStorage.values.name != undefined){
      //    setDropdown("true");
      // }
      // else{
      //    setDropdown("false");
      // }
    });

    
    return <div className="px-1 py-1 flex flex-row items-center">
       <div className="px-3 py-2 hover:text-red-700 hover:rounded-[20px] hover:cursor-pointer hover:drop-shadow-md font-poppins_regular text-white hover:bg-white">
          About Us
       </div>
       <div className="px-3 py-2 hover:text-red-700 ml-3 hover:rounded-[20px] hover:cursor-pointer hover:drop-shadow-md font-poppins_regular text-white hover:bg-white">
          Services
       </div>
       <div className="px-3 py-2 hover:text-red-700 ml-3 hover:rounded-[20px] hover:cursor-pointer hover:drop-shadow-md font-poppins_regular text-white hover:bg-white">
          Partners
       </div>
       <div className="px-3 py-2 hover:text-red-700 ml-3 hover:rounded-[20px] hover:cursor-pointer hover:drop-shadow-md font-poppins_regular text-white hover:bg-white">
          Team
       </div>
       <img src={facebook} className=" w-[25px] h-[25px] hover:cursor-pointer ml-3"></img>
       <img src={linkedin} className=" w-[25px] h-[25px] hover:cursor-pointer ml-2"></img>
       <img src={instagram} className=" w-[25px] h-[25px] hover:cursor-pointer ml-2"></img>
       {dropdown == "true" ?

         <div>
             <label className='ml-2 text-white font-poppins_regular text-lg '>{localStorage.getItem("name")}</label>
             {/* <button id="dropdownDefaultButton"   data-dropdown-toggle="dropdown" data-dropdown-trigger="hover" onClick={handleClick} className=" w-[25px] h-[25px] hover:cursor-pointer ml-2   rounded-lg text-sm  text-center inline-flex items-center " type="button"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white font-bold">
                    <path strokeLinecap={"round"} strokeLinejoin={"round"} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                </button> */}
         </div> 
         :<div>
            
            </div>
      }
    </div>
}

export default NavigatorComponent;