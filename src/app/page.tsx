
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Aboutus from "./Components/About-us/Aboutus";
import Our from "./Components/Our-profile/Our";
import Menu_section from "./Components/Menu-Section/Menu_section";
import Footer from "./Components/Footer/Footer";
import Mobilebar from "./Components/Mobilebar/Mobilebar";
import Choose_Food_item from "./Components/Food-Catigery/Choose_Food_item";
import Absoloute from "./Components/Position/Absoloute";
import MeetOurCheef from "./Components/MeetOurCheef/MeetOurCheef";
import Blog from "./Components/Blog/Blog";
import { Menubar } from "@/components/ui/menubar";

export default function Home() {
  return (
    
    <div  >

      <div className="hidden lg:block sticky top-0 z-10">
        <Header  />
      </div>

      <div className="lg:hidden">
          <Mobilebar />
      </div>

      <div>
        <Menubar />
      </div>
      
      <Hero />

      <Aboutus />

      <Choose_Food_item />

      <Our />

      <div className="mt-[120px]">
      <Absoloute />
      </div>

      <Menu_section />

      <MeetOurCheef />

      <Blog />

      <div className="fiexd bottom-0 left-0">
      <Footer />
      </div>


    </div>
  );
}
