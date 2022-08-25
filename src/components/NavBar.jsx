
import React, { useState } from "react";
import "./Navbar.css";
import Mylink from "./MyLInk";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [click, SetClick] = useState(false)
  const closeMenu = () => SetClick(false)

  return (
    <div className="Navbar">
    
      <span className="nav-logo">BLEACH</span>
      <div className={`nav-items ${isOpen && "open"}`} >
      <Mylink className="link-nav"  to="characters" spy={true} smooth={true} offset={50} duration={1000} onClick={closeMenu}>Characters</Mylink> 
      <Mylink className="link-nav " to="Video" spy={true} smooth={true} offset={50} duration={1000} onClick={closeMenu}>Trailer</Mylink>  
      <Mylink className="link-nav " to="textHistory" spy={true} smooth={true} offset={50} duration={1000} onClick={closeMenu}>Historia</Mylink>
      </div>
      <div
       className={`nav-toggle ${isOpen && "open"}`}
       onClick={() => setIsOpen(!isOpen)}    
       >
        <div className="bar"></div>
      </div>
    
    </div>
  
  )
}  
export default Navbar;