
import {FaLinkedinIn, FaGithub, FaWhatsapp} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import "./index.css"

export const Contact = () => {
    return(
        <div className='content-contact contact'>
            <h1>Contact</h1>
            <ul>
                <li>
                    <a href="#" target="_blank">
                        <FaLinkedinIn  size={40}/>
                        <h5>Linkedin</h5>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <FaGithub  size={40}/>
                        <h5>GitHub</h5>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <FaWhatsapp  size={40}/>
                        <h5>Whatsapp</h5>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <MdEmail  size={40}/>
                        <h5>Email</h5>
                    </a>
                </li>
            </ul>
        </div>
    )
}