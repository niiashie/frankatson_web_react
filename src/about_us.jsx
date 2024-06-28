import Title from "./components/title";
import director from "./assets/director.jpg"

function AboutUsComponent(){
    return <div className="w-[100vw] h-[500px]  relative">
          <div className="w-0 h-0 border-[200px] border-x-[100vw]  border-y-[350px] border-transparent border-r-red-50 border-b-0 bottom-0 right-0 absolute"></div>
        <div className="w-full h-full flex flex-col justify-center">
        <Title
          name={"About Us"}
        />
        <div className="mt-[25px] px-2 py-2   ">
            <div className="mx-auto py-1 px-1 justify-center flex flex-row ">
               <div className="items-start w-[40vw] flex flex-col  justify-center">
                 <label className="text-gray-400 font-poppins_light">Frankatson Limited is a veterinary pharmaceuticals,poultry equipment and agro chemical distributor in Ghana.
                    It was founded 30 years ago by the late Dr.Francis Boachie.
                 </label>
                 <label className="mt-2 text-gray-400 font-poppins_light">Frankatson holds agency for major 
                     International suppliers of Agricultural inputs from Spain, Holland, United Kingdom, United States of America, Italy,
                     France, China and India among others.
                 </label>
                 <div style={{ background: "rgb(200,36, 113)" }} className="w-[170px] h-[50px] rounded-[25px] mt-4 mb-2 drop-shadow-md flex flex-row items-center justify-center hover:cursor-pointer">
                    <label className="text-white font-poppins_regular text-md">Read More</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-white ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>

                 </div>
                 
               </div>
            
            <div className="w-[40vw] py-2  ml-[20px]">
               <img src={director} className="w-full  h-[350px] rounded-[15px] drop-shadow-md">
               </img>
            </div>
            </div>
           
        </div>
        </div>
        
    </div>
}

export default AboutUsComponent;