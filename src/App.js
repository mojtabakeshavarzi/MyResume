import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";
import UpButton from "./Components/UpButton";
import { useState , useEffect } from "react";
import { CircleLoader } from "react-spinners";
import NavbarMobile from "./Components/NavbarMobile";
import About from "./Components/About";


function App() {
  const[loading , setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    },1000)

  },[])

  return (
    <BrowserRouter>
    {
      loading ?
      <div className="spinner">
      <CircleLoader  loading={loading} color={'#0563bb'} size={150} />
      </div>
      :
      <>
      
      <Navbar />
      <NavbarMobile />
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <UpButton /> 
      </>
    }
      
    </BrowserRouter>
  );
}

export default App;
