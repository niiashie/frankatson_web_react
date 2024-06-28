import Logo from "./assets/logo.jpeg"
import facebook from './assets/facebook.png';
import linkedin from './assets/linkedin.png';
import instagram from './assets/instagram.png';
import Title2 from './components/title2'
import { Link } from "react-router-dom";

function FooterComponent(){
    return <div className="w-[100vw] pt-[40px] pb-[10px] gradient px-[30px] mt-[50px]  flex flex-col">
    <div className="w-full py-1 flex flex-wrap  justify-center">
        <div className="lg:w-[25%] xl:w-[25%] sm:w-[100%] md:w-[100%] flex  flex-col lg:items-start xl:items-start md:items-center sm:items-center">
          <img src={Logo} className="w-[100px] h-[100px] rounded-[15px] drop-shadow-md"></img>
          <label className="mt-[10px] text-white font-poppins_light">Follow us on</label>
          <div className="mt-[10px] px-[1px] flex flex-row items-center">
            <img src={facebook} className=" w-[25px] h-[25px] hover:cursor-pointer "></img>
            <img src={linkedin} className=" w-[25px] h-[25px] hover:cursor-pointer ml-2"></img>
            <img src={instagram} className=" w-[25px] h-[25px] hover:cursor-pointer ml-2"></img>
          </div>
       </div>
       <div className="lg:w-[25%] xl:w-[25%] sm:w-[100%] md:w-[100%] flex flex-col  lg:items-start xl:items-start md:items-center sm:items-center">
          
          <Title2 
            name ={"Contact"}
          />
          <label className="mt-[15px] text-white font-poppins_light">Mail Us</label>
          <div className="flex flex-row items-center mt-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <label className="text-white font-poppins_light ml-[10px]"> 0302224085 / 0302233722</label>
          </div>
          <div className="flex flex-row items-center mt-[3px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

            <label className="text-white font-poppins_light ml-[10px]">fboachie@yahoo.com</label>
          </div>
       </div>
       <div className="lg:w-[25%] xl:w-[25%] sm:w-[100%] md:w-[100%] flex flex-col lg:items-start xl:items-start md:items-center sm:items-center">
         <Title2 
            name ={"Frankatson"}
          />
          <Link to = "/news" className="mt-[15px] text-white font-poppins_light hover:cursor-pointer">News</Link>
          <Link to = "/partners" className="mt-[5px] text-white font-poppins_light hover:cursor-pointer">Partners</Link>
          <label className="mt-[5px] text-white font-poppins_light hover:cursor-pointer">Documents</label>
          <label className="mt-[5px] text-white font-poppins_light hover:cursor-pointer">Gallery</label>
       </div>
       <div className="lg:w-[25%] xl:w-[25%] sm:w-[100%] md:w-[100%]  flex flex-col lg:items-start xl:items-start md:items-center sm:items-center">
         <Title2 
            name ={"My Account"}
          />
          <Link to = "/login" className="mt-[15px] text-white font-poppins_light hover:cursor-pointer">Login</Link>
         
       </div>
    </div>
       <div className="w-full h-[100px]  relative">
         <div className="bottom-0 py-2 w-full  absolute flex flex-row items-center justify-center">
                <label className="text-white text-sm">&copy;</label>
            <label className="ml-[10px] text-white font-poppins_regular">
                2024 Frankatson | All rights reserved
            </label>
         </div>
         
        </div>  
    </div>
}

export default FooterComponent;