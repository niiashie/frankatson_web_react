
import '../App.css'
import IntroComponent from '../Intro'
import AboutUsComponent from '../about_us'
import ServicesComponent from '../services'
import PartnersComponent from '../partners'
import TeamComponent from '../team'
import ContactUsComponent from '../contact'
import FooterComponent from '../footer'


function Home() {
   
  
    return (
      <div className="App w-full h-full flex flex-col">
         <IntroComponent/>
         <AboutUsComponent/>
         <ServicesComponent/>
         <PartnersComponent/>
         <TeamComponent/>
         <ContactUsComponent/>
         <FooterComponent/>
      </div>
    )
}
export default Home;
