import React from "react";
import './App.css';
import HeroCommon from './components/Hero'
import Experience from "./components/Experience";
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <HeroCommon />
      <Experience />
      <Projects />
      <About />
      {/* <Contact /> */}
      <Footer />
    </div>    
  );
}

export default App;
