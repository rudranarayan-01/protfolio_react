import "./Heroimg.css"

import React from 'react'
import { Link } from "react-router-dom"
import introImg from "../assets/intro-bg.jpg"


const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img src={introImg} alt="Intro" className="intro-img" /> 
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER</p>
            <h1>Node.js DEVELOPER.</h1>
            <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg