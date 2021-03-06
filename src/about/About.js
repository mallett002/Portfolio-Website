import React, { Component } from 'react';
import './About.css';
import Logo from '../headings/Logo';
import Heading from '../headings/Heading';
import Nav from '../navs/Nav';
import Hamburger from '../navs/Hamburger';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import react from '../images/react.png';
import jax from '../images/ajax.png';
import jquery from '../images/jquery.png';
import ps from '../images/ps.png';
import ai from '../images/ai.png';
import redux from '../images/reduxLogo.png'


const Tools = () => (
    <div className='toolset'>
        <div className='tool'>
            <img src={html} alt='html' />
        </div>

        <div className='tool'>
            <img src={css} alt='css' />
        </div>

        <div className='tool'>
            <img src={js} alt='javascript' />
        </div>

        <div className='tool'>
            <img src={react} alt='react' />
        </div>

        <div className='tool'>
            <img src={redux} alt='redux' />
        </div>

        <div className='tool'>
            <img src={jax} alt='ajax' />
        </div>

        <div className='tool'>
            <img src={jquery} alt='jquery' />
        </div>

        <div className='tool'>
            <img src={ps} alt='photoshop' />
        </div>

        <div className='tool'>
            <img src={ai} alt='illustrator' />
        </div>

    </div>
)

class About extends Component {
    render() {
        return (
            <div className='about-wrapper'>
                <Nav />
                <div className='logo-hamburger-wrapper'>
                    <Logo />
                    <Hamburger />

                </div>
                <Heading title='ABOUT ME' xSmall='172' xLarge='257' />

                <div className='description'>
                    <p style={{lineHeight: '1.5'}}>
                    I am a graphic designer gone front end web developer. 
                    I love working in JavaScript and React to make clean, 
                    easy to navigate user interfaces. I believe in making 
                    high quality user experiences through an easy to navigate 
                    web application, that also looks appealing to the eye. 
                    I am currently learning to add functionality which creates 
                    more user friendliness. I am passionate about providing 
                    the best product for the user.
                    </p>
                </div>

                <div className='toolset-title'>
                    <h2 className='toolset-h2'>MY TOOLSET</h2>
                </div>

                <Tools />
            </div>
        )
    }
}

export default About;