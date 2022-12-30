import "./index.css"

import CutyLogin from '../../assets/CuteLogin.jpg'

export const Projects = () => {
    return(
        <div className="project-content">
            <h1>Projects</h1>
            <ul id="projects" className="ul-projects">
                <li>
                    <a href="https://github.com/FenixKing/CuteLogin" target="_blank"><img src={CutyLogin} alt="" /></a>
                </li>
                <li>
                    <a href="#" target="_blank"><img src={CutyLogin} alt="" /></a>
                </li>
                <li>
                    <a href="#" target="_blank"><img src={CutyLogin} alt="" /></a>
                </li>
                <li>
                    <a href="#" target="_blank"><img src={CutyLogin} alt="" /></a>
                </li>
                <li>
                    <a href="#" target="_blank"><img src={CutyLogin} alt="" /></a>
                </li>
            </ul>
        </div>
    )
}