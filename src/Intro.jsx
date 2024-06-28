import logo from './assets/logo.jpeg';
import NavigatorComponent from './components/navigator';
import animals from './assets/farm_animals.png';


function IntroComponent(){

   

   return <div  className="w-full h-[100vh] gradient relative">
      <div className="w-0 h-0 border-[200px] border-x-[100vw]  border-y-[350px] border-transparent border-r-white border-b-0 bottom-0 right-0 absolute"></div>
      <div  className="w-full h-[90px]  top-0 absolute">
        <div className='px-2 py-2  left-[25px] top-[15px] absolute flex flex-row items-center'>
         <img src={logo}  className="w-[50px] h-[50px] rounded-[10px] drop-shadow-md"></img>
         <label className='font-poppins_medium ml-3  text-2xl text-white'>Frankatson</label>

        </div>
        <div className='px-1 py-1 right-[35px] top-[20px] absolute flex flex-row items-center '>
           <NavigatorComponent/>
        </div>
        
        
      </div>
      <div className='px-2 py-2 top-[23%] left-[30px] absolute  flex flex-col'>
         <label className='text-[3.5vw] text-white font-poppins_light'>Sort Out All</label>
         <label className='text-[3.5vw] text-white font-poppins_light'>Your Veterinary And</label>
         <label className='text-[3.5vw] text-white font-poppins_light'>Farming Issues With</label>
         <label className='text-[3.5vw] text-white font-poppins_light'>The Farmer's Friend</label>
         <div className='px-1 mt-2 py-1 flex flex-row'>
            <button className='h-[50px] w-[200px] bg-white text-red-700 rounded-[25px] drop-shadow-md font-poppins_regular'>View Services</button>
            <button style={{ background: "rgb(200,36, 113)" }} className='h-[50px] w-[200px]  ml-3 text-white font-poppins_regular rounded-[25px] drop-shadow-md'>Contact Us</button>
         </div>
      </div>
      <img src={animals} className='w-[45vw] h-[45vh] right-[60px] bottom-[150px] absolute'></img>
   </div> 
}

export default IntroComponent;