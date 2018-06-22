import React from 'react';
import { Link } from 'react-router-dom';
import '../navs/Nav.css';


const HomeMobile = () => (
            <ul className='mobile-ul'>
                <Link activeClassName='current' to='/about/'><li>About Me</li></Link>
                <Link activeClassName='current' to='/portfolio/'><li>Portfolio</li></Link>
                <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/1hviFC0q6DFguP8kbhlgILf8PsV7N3V_jhMUeAM67uME/edit?usp=sharing'><li>Resume</li></a>
            </ul>
)

export default HomeMobile;