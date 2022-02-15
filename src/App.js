import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HeroCommon from './components/Hero'
import Experience from "./components/Experience";
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={HeroCommon}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
        </Routes>
      </Router> */}
      <HeroCommon />
      <Experience />
      <Projects />
      <About />
      <Footer />
    </div>    
  );
}

export default App;
