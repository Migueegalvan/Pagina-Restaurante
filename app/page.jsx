import StyleGuide from "@/components/ui/StyleGuide";
import Hero from "@/components/ui/Hero";
import Header from "@/components/ui/Header";
import Menu from "@/components/ui/Menu";
import Reservation from "@/components/ui/Reservation";
import About from "@/components/About";
import Map from '@/components/Map';
import Footer from "@/components/Footer";




export default function Home() {
  return (
   <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden '> 
   {/*<StyleGuide/> */}
   <Header/>
    <Hero/>
    <Menu/>
    <Reservation/>
    <About />
    <Map />
    <Footer />
    


   { /* <div className="h-[4000px]"></div>*/ }
   </main>
  );
}
