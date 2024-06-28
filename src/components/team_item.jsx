import Placeholder from '../assets/placeholder.jpg'
import Frimpong from '../assets/frimpong2.jpg'
import Sefa from '../assets/sefa.jpg'
import Joyce from '../assets/aunty_joyce.jpg'
import Director from '../assets/director.jpg'
import Kwame from '../assets/dir_kum.jpg'
import Oppong from '../assets/charlotte.jpg'
import Odoom from '../assets/christian.png'

function TeamItemComponent({name,role}){
   return <div className="lg:w-[25%] sm:w-[50%] md:w-[50%] xl:w-[25%] h-[330px] items-center justify-center flex flex-col ">
     <img src={name == "Dr Victor Frimpong"?Frimpong: name == "Dr Felix Sefa Boachie"?Sefa:
       name == "Mr Kwadwo Boakye" ? Director : name == "Mr Kwame Boakye" ? Kwame : name == "Mrs Joyce Ofori"? Joyce:
       name == "Dr Charlotte Oppong" ? Oppong : name == "Mr Christian Odoom" ? Odoom : 
     Placeholder} className="w-[70%] h-[220px] rounded-[15px] drop-shadow-md"></img>
     <label className=" font-poppins_regular text-black mt-3 text-center">{name}</label>
     <label className="font-poppins_light text-gray-500 text-center">{role}</label>

   </div>
}

export default TeamItemComponent;