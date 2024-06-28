import Agro from '../assets/agriculture.png'
import Chick from '../assets/chick.png'
import Vert from '../assets/vet.png'
import Microscope from '../assets/microscope.png'


function ServiceItemComponent({icon,title,description}){
    return <div className="w-[300px] h-[350px] bg-white rounded-[15px] drop-shadow-md mr-3 mt-3 px-3 py-3 flex flex-col items-center">
        <div  className="w-[70px] h-[70px] rounded-full bg-red-50 mt-[30px] flex items-center justify-center">
           <img className='w-[30px] h-[30px]' src={icon == 'p1' ? Agro : icon == 'p2' ? Chick : icon == 'p3' ?Vert : Microscope}></img>
        </div>
        <label className="mt-3 text-black font-poppins_medium text-xl">{title}</label>
        <label className="mt-2 text-gray-400 font-poppins_light text-center text-md">{description}</label>

    </div>
}
export default ServiceItemComponent;