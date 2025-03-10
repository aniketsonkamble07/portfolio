
import AboutMe  from './components/AboutMe';
import ConnectMe from './components/ConnectMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // This is required for components like dropdowns, modals, etc.
import Skills from "./components/Skills";
import './App.css';
import Projects from './components/Projects';


function App() {
  return (
    <>
     
     <AboutMe></AboutMe>
     <Skills/>
     <Projects/>
     
     <ConnectMe></ConnectMe>
     
    </>
   

  );
}

export default App;
