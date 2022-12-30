import {useMemo, useState} from 'react'

import './index.css';

import { FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaBootstrap, FaSass } from 'react-icons/fa'
import { SiTailwindcss, SiRedux, SiStyledcomponents } from 'react-icons/si'


export const Skills = () => {
    const image = [
      <FaHtml5 className='icons' color='#d2296a'/>, 
      <FaCss3 className='icons' color='#d2296a'/>, 
      <FaJs className='icons' color='#d2296a'/>, 
      <FaReact className='icons' color='#d2296a'/>, 
      <SiRedux className='icons' color='#d2296a'/>, 
      <FaGit className='icons' color='#d2296a'/>, 
      <FaSass className='icons' color='#d2296a'/>, 
      <SiTailwindcss className='icons' color='#d2296a'/>, 
      <FaBootstrap className='icons' color='#d2296a'/>, 
      <SiStyledcomponents className='icons' color='#d2296a'/>, 
    ]

    const title = [
      "HTML", "CSS3", 
      "JAVASCRIPT", "REACT",
      "REDUX", "GIT", 
      "SASS", "TAILWIND", 
      "BOOTSTRAP", "STYLED", 
    ]

    return(
        <div className='content-skills' >
          <h1>Skills</h1>
            <ul id="skills" >
             {
              image.map((img, key) => (
                <li key={key}>
                  <div className="skills">
                    {img}
                    <div>
                      <h5>{title[key]}</h5>
                    </div>
                  </div>
                </li>
              ))
             }
            </ul>
        </div>
    )
}