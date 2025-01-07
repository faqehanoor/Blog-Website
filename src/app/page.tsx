import { Banner } from "./components/banner";
import Footer from "./components/Footer";
import { Header } from "./components/header";
import Blog from "./components/blog";
import About from "./components/about";
import Contactus from "./components/contactus";




export default function HomePage() {
  return (
    <div>
     
     <Header />
     <Banner/>
     <About />
     <Blog />
     
     <Contactus />
     <Footer/>
    </div>
  );
}
