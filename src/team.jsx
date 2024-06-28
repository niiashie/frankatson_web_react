import Title from "./components/title";
import TeamItemComponent from './components/team_item'


function TeamComponent(){
   return <div className="w-full py-[15px]  flex flex-col items-center justify-center">
        <div className="w-full h-[50px]"></div>
       <Title
         name={"Our Team"}
       />
       <div className="mx-[5vw] mt-[30px] sm:w-[90vw] md:w-[90vw] lg:w-[80vw] xl:w-[80vw] py-[15px] flex flex-wrap justify-center">
          <TeamItemComponent
            name={"Mr Kwadwo Boakye"}
            role = {"Managing Director"}
          />
          <TeamItemComponent
            name={"Mr Kwame Boakye"}
            role = {"Deputy Managing Director"}
          />
          <TeamItemComponent
            name={"Mrs Joyce Ofori"}
            role = {"General Manager"}
          />
          <TeamItemComponent
            name={"Mr Micheal Amofa Boateng"}
            role = {"Finance Manager"}
          />
          <TeamItemComponent
            name={"Dr Victor Frimpong"}
            role = {"VET. Sales Officer(Accra)"}
          />
          <TeamItemComponent
            name={"Dr Felix Sefa Boachie"}
            role = {"VET. Sales Officer(Kumasi)"}
          />
          <TeamItemComponent
            name={"Dr Charlotte Oppong"}
            role = {"VET. Sales Officer(Accra)"}
          />
          <TeamItemComponent
            name={"Mr Christian Odoom"}
            role = {"Agro Sales Manager"}
          />
       </div>
   </div> 
}

export default TeamComponent;