import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import git from '../images/git-w.png'
import link from '../images/link-w.png'


class Nav extends Component {
    render() {
        return (
           <nav className='nav-wide'>
                <ul>
                    <NavLink exact activeClassName='current' to='/'><li>Home</li></NavLink>
                    <NavLink activeClassName='current' to='/about/'><li>About Me</li></NavLink>
                    <NavLink activeClassName='current' to='/portfolio/'><li>Portfolio</li></NavLink>
                    <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/1hviFC0q6DFguP8kbhlgILf8PsV7N3V_jhMUeAM67uME/edit?usp=sharing'><li>Resume</li></a>
                    <div className='contact'>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/mallett002" className='social-a'>
                            <img className='social-img' src={git} alt='github' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mallettwilliam" className='social-a'>
                            <img className='social-img' src={link} alt='linkedin' />
                        </a>
                    </div>
                </ul>
           </nav>
        )
    }
}

export default Nav;