import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from './Components/Contact';

function App() {

  return (
      <div className="h-screen bg-[#0a192f]"> 
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
   </div>
   
      
  
  )
}

export default App
