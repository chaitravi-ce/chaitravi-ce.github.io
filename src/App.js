import React,  { useEffect }  from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HeroCommon from './components/Hero'
import Experience from "./components/Experience";
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  return (
    <div className="App">
      <HeroCommon />
      <Experience />
      <Projects />
      <About />
      <Footer />
    </div>    
  );
}

export default App;
