import React, { Component } from 'react';
import './Portfolio.css'
import Nav from '../navs/Nav'
import Logo from '../headings/Logo'
import Hamburger from '../navs/Hamburger'
import Heading from '../headings/Heading'
import PortIntro from './PortIntro'
import { Switch, Route } from 'react-router-dom'
import PortWeb from './PortWeb'
import PortGraphic from './PortGraphic'
import PortArt from './PortArt'

const portType = [
    'WEB DEVELOPMENT',
    'GRAPHIC DESIGN',
    'ARTWORK'
];

class Portfolio extends Component {

    render() {
        return (
            <div className='portfolio-wrapper'>
                <Nav />
                <div className='logo-hamburger-wrapper'>
                    <Logo />
                    <Hamburger />

                </div>
                <Heading title='PORTFOLIO' xSmall='185' xLarge='277' />
                {this.props.match.url === '/portfolio/' && <PortIntro match={this.props.match}/>}
                <Switch>
                    <Route path={`${this.props.match.path}/web/`} 
                        render={(props) => <PortWeb type={portType[0]} {...props} />}
                    />
                    <Route path={`${this.props.match.path}/graphic/`} 
                        render={(props) => <PortGraphic type={portType[1]} {...props}/>}
                    />
                    <Route path={`${this.props.match.path}/art/`} 
                        render={(props) => <PortArt type={portType[2]} {...props}/>}
                    />
                </Switch>
            </div>
        )
    }
}

export default Portfolio;