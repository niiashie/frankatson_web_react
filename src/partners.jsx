import Title from "./components/title";
import PartnerItemComponent from "./components/partner_item";

function PartnersComponent(){
    return <div className="w-full py-[15px]  flex flex-col items-center justify-center ">
        <div className="w-full h-[50px]"></div>
       <Title
         name={"Our Partners"}
       />
       <div className="mx-[5vw] mt-[30px] w-[90vw] py-[15px] flex flex-wrap justify-center">
          <PartnerItemComponent
             title={"Kepro"}
          />
          <PartnerItemComponent
             title={"Laprovet"}
          />
          <PartnerItemComponent
             title={"Hipra"}
          />
          <PartnerItemComponent
             title={"Nutriblock"}
          />
          <PartnerItemComponent
             title={"VMD"}
          />
          <PartnerItemComponent
             title={"Biomar"}
          />
           <PartnerItemComponent
             title={"Champrix"}
          />
          <PartnerItemComponent
             title={"SKM Pharma"}
          />
          <PartnerItemComponent
             title={"Supreme Equipment"}
          />
          <PartnerItemComponent
             title={"Arion Fasoli"}
          />
          <PartnerItemComponent
             title={"Hebei New Century Pharmaceuticals"}
          />
       </div>
    </div>
}

export default PartnersComponent;