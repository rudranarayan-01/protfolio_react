import "./Navbar.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"


const Navbar = () => {

    const[Click,setClick] = useState(false);
    const handleClick = () => setClick(!Click);

    const[color,setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 100 ){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "Navbar Navbar-bg" : "Navbar"}>
        <Link to="/" ><h1>Protfolio</h1></Link>

        <ul className={Click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="/project" >Project</Link>
            </li>
            <li>
                <Link to="/about" >About</Link>
            </li>
            <li>
                <Link to="/contact" >Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick} >
            {Click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}
            
            
        </div>
    </div>
  )
}

export default Navbar