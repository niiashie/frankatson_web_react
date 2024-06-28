import Kepro from '../assets/Kepro.png'
import Nutriblock from '../assets/nutriblock.jpg'
import Laprovet from '../assets/laprovet.jpg'
import Hipra from '../assets/hipra.png'
import Vetko from '../assets/vetko.png'
import VMD from '../assets/vmd.png'
import SKM from '../assets/skm.png'
import Sunway from '../assets/sunway.jpeg'
import Supreme from '../assets/supreme.jpg'
import Champrix from '../assets/champrix.jpeg'
import Biomar from '../assets/biomar.png'
import Arion from '../assets/arion.png'


function PartnerItemComponent({title,type}){
    if(type == null){
      return <div className="w-[200px] h-[200px] flex flex-col items-center justify-center  mr-3 mt-3">
      <img src={title == 'Kepro'? Kepro : title == 'Laprovet'?Laprovet : title == 'Hipra'?
      Hipra: title == 'Nutriblock'? Nutriblock: title == 'VMD' ? VMD :title == 'Vetko' ? Vetko:
      title == 'SKM Pharma'? SKM : title == 'Supreme Equipment'? Supreme: title == 'Champrix' ? Champrix:
      title == 'Biomar' ? Biomar : title == 'Arion Fasoli' ? Arion:
      Sunway} className="rounded-[15px] w-[170px] h-[130px] drop-shadow-md "></img>
      <label className='text-gray-400 font-poppins_regular mt-4 text-center'>{title}</label>
    </div>
    }
    else{
      return <div className="w-[300px] h-[300px] flex flex-col items-center justify-center  mr-3 mt-3">
      <img src={title == 'Kepro'? Kepro : title == 'Laprovet'?Laprovet : title == 'Hipra'?
      Hipra: title == 'Nutriblock'? Nutriblock: title == 'VMD' ? VMD :title == 'Vetko' ? Vetko:
      title == 'SKM Pharma'? SKM : title == 'Supreme Equipment'? Supreme: title == 'Champrix' ? Champrix:
      title == 'Biomar' ? Biomar : title == 'Arion Fasoli' ? Arion:
      Sunway} className="rounded-[15px] w-[200px] h-[200px] drop-shadow-md "></img>
      <label className='text-gray-400 font-poppins_regular mt-4 text-center'>{title}</label>
    </div>
    }
   
}

export default PartnerItemComponent;