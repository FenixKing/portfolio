import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";

import "./index.css"

import {FaLinkedinIn, FaGithub, } from 'react-icons/fa'

export const Header = () => {
    return(
        <div className='header'>
            <div className='logo'>
                <h1>AJ</h1>
            </div>
            <nav>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >   Skills
                </Link>
                <Link 
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} >Projects</Link>
            </nav>
            <div className="social" >
                <a href="https://www.linkedin.com/in/jos%C3%A9-adriano-dias-rodrigues-11b681163/" target="_blank">
                    <FaLinkedinIn className="icons"/>
                </a>
                <a href="https://github.com/FenixKing" target="_blank">
                    <FaGithub className="icons"/>
                </a>
            </div>
        </div>
    )
}