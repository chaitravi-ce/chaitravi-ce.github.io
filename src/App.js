import React from "react";
import './App.css';
import HeroCommon from './components/Hero'
import Experience from "./components/Experience";
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <HeroCommon />
      <Experience />
      <Projects />
    </div>    
  );
}

export default App;
