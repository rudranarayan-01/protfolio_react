import "./Footer.css"

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>Takhatpur</p>
                        <p>Baripada,Odisha</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <h4>+91-8260348599</h4>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <h4>codingislife01@gmail.com</h4>  
                </div>
            </div>

            <div className="right">
                <h2>About me</h2>
                <h4>Hello! I'm Rudranarayan Sahu</h4>
                <p>Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, C, C++, PYTHON, HTML, CSS, SQL, react, node.js, etc. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology</p>
                <div className="social">

                    <a href="https://github.com/rudranarayan-01"rel="noreferrer" target="_blank"><FaGithub size={30} style={{color:"#fff",marginRight:"2rem"}}/></a>

                    <a href="https://www.instagram.com/coder_society_/"rel="noreferrer" target="_blank"><FaInstagram size={30} style={{color:"#fff",marginRight:"2rem"}}/></a>

                    <a href="https://www.facebook.com/rudranarayan.sahu265" rel="noreferrer" target="_blank"><FaFacebook size={30} style={{color:"#fff",marginRight:"2rem"}}/></a>

                    <a href="https://www.linkedin.com/in/rudranarayan-sahu-b7b9a6244/" target="_blank" rel="noreferrer"><FaLinkedin size={30} style={{color:"#fff",marginRight:"2rem"}}/></a>

                </div>
            </div>
        </div>
        <p id="footer">Copyright 2022 © Name PSD Template. All right reserved.</p>
    </div>
  )
}

export default Footer