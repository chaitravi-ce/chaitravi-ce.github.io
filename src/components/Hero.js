import React from "react";
import Navbar from "./Navbar";
import "../styles/Hero.css"

const HeroCommon = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="landing">
        <div className="socials">
          <a href="mailto:cnchalke_b19@el.vjti.ac.in"><i class="fa fa-inbox"></i></a>
          <a href="https://www.linkedin.com/in/chaitravi-chalke-6b4806190/"><i class="fa fa-linkedin"></i></a>
          <a href="https://github.com/chaitravi-ce"><i class="fa fa-github-alt"></i></a>
          <a href="https://twitter.com/Chaitravi_ce"><i class="fa fa-twitter"></i></a>
          <a href="https://www.instagram.com/chaitravi_ce25/"><i class="fa fa-instagram"></i></a>
        </div>
        <div className="main-text">
          <h1>Hi, I'm Chaitravi Chalke</h1>
          <p>I am a polymath who likes to learn new things in my free time. 
            I have tried my hands on AI/ML, Application Development and Web Development in the process of 
            developing cool some cool projects.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCommon;