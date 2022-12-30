import React from 'react';

import { Header } from '../components/header';
import { Home } from '../components/home';
import { Skills } from '../components/skills';
import { Projects } from '../components/projects';

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
        </div>
    )
}

export default Main