
import {FaLinkedinIn, FaGithub, FaWhatsapp} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import "./index.css"

export const Contact = () => {
    return(
        <div className='content-contact contact'>
            <h1>Contact</h1>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-adriano-dias-rodrigues-11b681163/" target="_blank">
                        <FaLinkedinIn  size={40}/>
                        <h5>Linkedin</h5>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/FenixKing" target="_blank">
                        <FaGithub  size={40}/>
                        <h5>GitHub</h5>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/5562984556262" target="_blank">
                        <FaWhatsapp  size={40}/>
                        <h5>Whatsapp</h5>
                    </a>
                </li>
                {/* <li>
                    <a href="abouthework@gmail.com" target="_blank">
                        <MdEmail  size={40}/>
                        <h5>Email</h5>
                    </a>
                </li> */}
            </ul>
        </div>
    )
}