import Intro from "./Components/Intro";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Resume />
    </BrowserRouter>
  );
}

export default App;
