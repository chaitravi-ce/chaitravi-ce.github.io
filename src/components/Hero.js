import React from "react";
import Navbar from "./Navbar";
import "../styles/Hero.css"

const HeroCommon = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="socials column">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-inbox"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="https://github.com/chaitravi-ce"><i class="fa fa-github-alt"></i></a>
      </div>
      <div className="main-text column">
        <h1>Hi, I'm Chaitravi Chalke</h1>
        <p>I am a polymath who likes to learn new things in my free time. 
          I have tried my hands on AI/ML, Application Development and Web Development in the process of 
          developing cool some cool projects.</p>
      </div>
    </div>
  );
};

export default HeroCommon;