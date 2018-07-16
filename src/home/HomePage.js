import React, { Component } from 'react';
import HomeMobile from './HomeMobile';
import './Homepage.css';
import SlideNav from '../navs/SlideNav';
import SlideLogo from '../headings/SlideLogo';
import Hero from '../headings/Hero';
import git from '../images/git-g.png';
import link from '../images/link-g.png';


class HomePage extends Component {
    state = { 
        showNav: false, 
        showLogo: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(({ showNav }) => ({
                showNav: true
            }))
        }, 2000)

        setTimeout(() => {
            this.setState(({ showLogo }) => ({
                showLogo: true
            }))
        }, 1000)
    }

    render() {
        const { showNav, showLogo } = this.state;

        return (
            <div className='container'>
                <div className='home-page-wrapper'>
                        <SlideNav showNav={showNav} /> 
                        <SlideLogo showLogo={showLogo} />
                        <Hero />
                </div>
                <div className='mobile-nav'>
                    <HomeMobile />
                </div>
                <div className='social-wrapper'>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mallett002"><div className='icon-container'>
                        <img src={git} alt='github-link' />
                    </div></a>

                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/mallettwilliam"><div className='icon-container'>
                        <img src={link} alt='linkedin' />
                    </div></a>
                </div>
            </div>
        );
    }
}

export default HomePage;