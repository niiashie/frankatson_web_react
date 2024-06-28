
import '../App.css'
import logo from "../assets/logo.jpeg";
import { useNavigate } from 'react-router-dom';
import PartnerItemComponent from "../components/partner_item";

function PartnersPage(){
    
    const navigate = useNavigate();

    function goBack(){
        alert("Hello");
    }

    return <div className="w-[100vw] h-[100vh] flex flex-col">
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

            <label className='font-poppins_regular text-lg text-white  ml-[10px]'> Partners </label>
        </div>
       </div>
       <div className='flex-1 w-[100vw] h-full px-[10vw]  overflow-y-scroll flex flex-wrap justify-center'>
       <PartnerItemComponent
             title={"Kepro"}
             type = {"large"}
          />
          <PartnerItemComponent
             title={"Laprovet"}
             type = {"large"}
          />
          <PartnerItemComponent
             title={"Hipra"}
             type = {"large"}
          />
          <PartnerItemComponent
             title={"Nutriblock"}
             type = {"large"}
          />
          <PartnerItemComponent
             title={"VMD"}
             type = {"large"}
          />
          <PartnerItemComponent
             title={"Biomar"}
             type = {"large"}
          />
           <PartnerItemComponent
             title={"Champrix"}
             type = {"large"}
          />
          <PartnerItemComponent
             title={"SKM Pharma"}
             type = {"large"}
          />
          <PartnerItemComponent
             title={"Supreme Equipment"}
             type = {"large"}
          />
          <PartnerItemComponent
             title={"Arion Fasoli"}
             type = {"large"}
          />
          <PartnerItemComponent
             title={"Hebei New Century Pharmaceuticals"}
             type = {"large"}
          />
       </div>
    </div>
}
export default PartnersPage;