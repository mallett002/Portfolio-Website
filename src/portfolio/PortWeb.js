import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import './PortWeb.css'
import support from '../images/support.jpg'
import stopwatch from '../images/stopwatch.jpg'
import todo from '../images/todo.jpg'

const hoveredStyles = {
    heading: { opacity: '1' },
    div: { filter: 'sepia(100%) hue-rotate(120deg) brightness(50%)'}
}

class Project extends Component {
    state = { hovered: false };

    handleHover = () => {
        this.setState(({ hovered }) => ({
            hovered: true
        }))
    }

    handleLeave = () => {
        this.setState(({ hovered }) => ({
            hovered: false
        }))
    }

    render() {
        const { hovered } = this.state;
        return (
            <div className='project-wrapper'
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleLeave}
            >
                <div className='mobile-heading'>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.tool}</p>
                </div>
                <a href={`projects/${this.props.id}`}>
                    <div 
                        className='project-background'
                        style={Object.assign({}, 
                            {backgroundImage: `url(${this.props.background})`},
                            hovered && {...hoveredStyles.div})}>
                    </div>
                    <div className='wide-heading'
                        style={Object.assign({}, 
                            hovered && {...hoveredStyles.heading})}
                    >
                        <h2>{this.props.title}</h2>
                        <p>{this.props.tool}</p>
                    </div>
                </a>
            </div>
        )
    }
}

class PortWeb extends Component {
    render() {
        return (
            <div>
                <div className='port-type'><h1>{this.props.type}</h1></div>
                <div className='port-projects'>
                        <Project 
                            title='Support Club' 
                            tool='HTML' 
                            background={support}
                            match={this.props.match}
                            id='supportclub'
                        />
                        <Project 
                            title='Stopwatch' 
                            tool='React' 
                            background={stopwatch}
                            match={this.props.match}
                            id='stopwatch'
                        />
                        <Project 
                            title='Todo List' 
                            tool='React' 
                            background={todo}
                            match={this.props.match}
                            id='todo'
                        />
                </div>
            </div>
        )
    }
}

export default PortWeb;