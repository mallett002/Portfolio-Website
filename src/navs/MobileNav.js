import React from 'react'
import { NavLink } from 'react-router-dom'
import './MobileNav.css'
import git from '../images/git-g.png'
import link from '../images/link-g.png'



class MobileNav extends React.Component {

    render() {
        return (
            <div>
                <ul id='mobile-ul'
                >
                    <li><NavLink exact activeClassName='current' to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName='current' to='/about/'>About Me</NavLink></li>
                    <li><NavLink activeClassName='current' to='/portfolio/'>Portfolio</NavLink></li>
                    <li><a target="_blank" href='https://docs.google.com/document/d/1hviFC0q6DFguP8kbhlgILf8PsV7N3V_jhMUeAM67uME/edit?usp=sharing'>Resume</a></li>
                </ul>
                <div className='social-wrapper-mobile'>
                    <a target="_blank" href="https://github.com/mallett002">
                        <div className='icon-container-mobile'>
                            <img src={git}/>
                    </div></a>

                    <a target="_blank" href="https://linkedin.com/in/mallettwilliam">
                        <div className='icon-container-mobile'>
                            <img src={link}/>
                    </div></a>
                </div>
            </div>

        )
    }
}
    


export default MobileNav