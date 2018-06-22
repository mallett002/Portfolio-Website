import React, { Component } from 'react';
import HomeMobile from './HomeMobile';
import './Homepage.css';
import Nav from '../navs/Nav';
import Hero from '../headings/Hero';
import Logo from '../headings/Logo';
import git from '../images/git-g.png'
import link from '../images/link-g.png'


class HomePage extends Component {
    render() {
        return (
            <div className='container'>
                <div className='home-page-wrapper'>
                    <Nav />
                    <Logo />
                    <Hero />
                </div>
                <div className='mobile-nav'>
                    <HomeMobile />
                </div>
                <div className='social-wrapper'>
                    <a target="_blank" href="https://github.com/mallett002"><div className='icon-container'>
                        <img src={git}/>
                    </div></a>

                    <a target="_blank" href="https://linkedin.com/in/mallettwilliam"><div className='icon-container'>
                        <img src={link}/>
                    </div></a>
                </div>
            </div>
        );
    }
}

export default HomePage;