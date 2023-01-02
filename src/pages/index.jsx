import React from 'react';

import { Header } from '../components/header';
import { Home } from '../components/home';
import { Skills } from '../components/skills';
import { Projects } from '../components/projects';
import { Contact } from '../components/contact';

import "./index.css"

const Main = () => {
    return(
        <div className=''>
            <div className='main'>
                <div className='back'></div>
                <Header />
                <div className='content'>
                    <Home />
                </div>
            </div>
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Main