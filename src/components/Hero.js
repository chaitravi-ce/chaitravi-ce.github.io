import React from "react";
import Navbar from "./Navbar";
import "../styles/Hero.css"

const HeroCommon = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="landing">
        <div className="socials">
          <a href="mailto:cnchalke_b19@el.vjti.ac.in"><i className="fa fa-inbox fb"></i></a>
          <a href="https://www.linkedin.com/in/chaitravi-chalke-6b4806190/"><i className="fa fa-linkedin fb"></i></a>
          <a href="https://github.com/chaitravi-ce"><i className="fa fa-github-alt fb"></i></a>
          <a href="https://twitter.com/Chaitravi_ce"><i className="fa fa-twitter fb"></i></a>
          <a href="https://www.instagram.com/chaitravi_ce25/"><i className="fa fa-instagram fb"></i></a>
        </div>
        <div className="main-text">
          <h2>Hi, I'm Chaitravi Chalke</h2>
          <p>I am a polymath who likes to learn new things in my free time. 
            I have tried my hands on AI/ML, Application Development and Web Development in the process of 
            developing cool some cool projects.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCommon;