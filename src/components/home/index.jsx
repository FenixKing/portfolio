import TypeIt from 'typeit-react'

import './index.css'

import { BsArrowRightCircle } from 'react-icons/bs'
import Image from '../../assets/online.svg'

export const Home = () => {
    return (
        <div className='home'>
            <div className='part1'>
                <div className='welcome'>
                    <h6>Welcome to my Portfolio</h6>
                </div>
                <div className='title'>
                    <h1>
                        Hi! I'm Aj
                        <TypeIt
                            options={{
                                strings: [" Frontend Developer"],
                                speed: 150,
                                loop: 150
                            }}
                        />
                    </h1>
                </div>
                <div className='description'>
                    <p>                       
                        I'm Brazilian, 
                        I'm 25 years old. 
                        I currently work as a contractor. 
                        I have more than 3 years of experience with frontend development focused on react stack.
                        I'm passionate about games, technology and finance.
                    </p>
                </div>
                <div className='button'>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-adriano-dias-rodrigues-11b681163/" target="_blank">
                        Let's Connect
                        <BsArrowRightCircle className='arrow' />
                    </a>
                </div>
            </div>
        </div>
    )
}