import Title from "./components/title";
import ServiceItemComponent from "./components/service_item";

function ServicesComponent(){
    return <div className="w-full pt-[80px] bg-red-50 relative">
         <div className="w-0 h-0 border-[200px] border-x-[100vw]  border-y-[350px] border-transparent border-r-white border-b-0 bottom-0 right-0 absolute"></div>
        <div className="w-full pt-2 flex flex-col items-center justify-center">
        <Title
          name={"Our Services"}
        />
        <div className="w-[90vw] pt-[20px] mt-[30px]  flex flex-wrap justify-center">
           <ServiceItemComponent
             icon = {'p3'}
             title = {"Veterinary"}
             description = {"We deal in veterinary products including soluble and injectable medications. We major in vitamin, antibiotics, coccidiostats and amongst others."}
           />
           <ServiceItemComponent
             icon = {"p1"}
             title = {"Agro Chemicals"}
             description = {"Also, we supply farmers with all manner of agrochemicals including pesticides,insecticides,weedicides etc to improve the yeild of farmers and make farming lucrative."}
           />
           <ServiceItemComponent
             icon = {"p4"}
             title = {"Laboratory Services"}
             description = {"We offer laboratory services for livestock and pets. Our laboratory services mainly involve postmoterm and medication prescription of infected animals and amongst others"}
           />
           <ServiceItemComponent
             icon = {"p2"}
             title = {"Day Old Chicks"}
             description = {"To meet the high demands for chicken and eggs in West Africa, we make day old chicks mainly broilers and layes available for poultry farmers to make eggs and chicken readily available"}
           />
        </div>
        </div>
        
    </div>
}

export default ServicesComponent;