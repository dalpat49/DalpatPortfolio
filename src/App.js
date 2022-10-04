import Contact from "./components/MainContact";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Image from "./Images/Profile.jpeg"
import Footer from "./components/Footer";
import Likeheart from "./components/Likeheart";




function App() {
  
  return (
    <>
    <main className="bg-slate-900">
      <div className="container  mx-auto">
     <Navbar />
     </div>
     <div className="container mx-auto text-white">
      <Likeheart />
      <Heading img={Image} />
      <Skills/>
      <Projects />
      <Contact />
      <Footer/>
      
      
     </div>
     </main>
    </>
  );
}

export default App;
