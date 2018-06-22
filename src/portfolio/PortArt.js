import React, { Component } from 'react'
import Modal from './Modal'
import './PortArt.css'
import apple from '../images/apple.jpg'
import ave from '../images/ave.jpg'
import bible from '../images/bible.jpg'
import downtown from '../images/downtown.jpg'
import coffee from '../images/coffee.jpg'
import moto from '../images/moto.jpg'
import pbj from '../images/pbj.jpg'
import sioux from '../images/sioux.jpg'
import tractor from '../images/tractor.jpg'


const hoveredStyles = {
    heading: { opacity: '1' },
    div: { filter: 'sepia(100%) hue-rotate(120deg) brightness(50%)'}
}

const width = window.innerWidth;
const mobileScreen = 700;

class Project extends Component {
    state = { 
        hovered: false,
        isOpen: false 
    };

    handleHover = () => {
        if(width < mobileScreen) { return null } 
        this.setState(({ hovered }) => ({
            hovered: true
        }))
    }

    handleLeave = () => {
        this.setState(({ hovered }) => ({
            hovered: false
        }))
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            hovered: false
        });
    }

    render() {
        const { hovered } = this.state;
        return (
            <div className='project-wrapper'
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleLeave}
                onClick={this.toggleModal}
            >
                <div className='mobile-heading'>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.tool}</p>
                </div>

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
                <Modal
                    show={this.state.isOpen}
                    close={this.toggleModal}
                >
                    <img id={this.props.id} src={this.props.background} />
                </Modal>
            </div>
        )
    }
}

class PortArt extends Component {
    render() {
        return (
            <div>
                <div className='port-type'><h1>{this.props.type}</h1></div>
                <div className='port-projects'>
                    <Project 
                        title='Iowa' 
                        tool='Acrylic' 
                        background={tractor}
                        id='tractor'
                    />
                    <Project 
                        title='Sioux City' 
                        tool='Acrylic' 
                        background={sioux}
                        id='sioux'
                    />
                    <Project 
                        title='Snack' 
                        tool='Acrylic' 
                        background={pbj}
                        id='pbj'
                    />
                    <Project 
                        title='Parked' 
                        tool='Acrylic' 
                        background={moto}
                        id='moto'
                    />
                    <Project 
                        title='Downtown' 
                        tool='Acrylic' 
                        background={downtown}
                        id='downtown'
                    />
                    <Project 
                        title='Evening' 
                        tool='Acrylic' 
                        background={ave}
                        id='ave'
                    />
                    <Project 
                        title='Breakfast' 
                        tool='Watercolor' 
                        background={coffee}
                        id='coffee'
                    />
                    <Project 
                        title='Devotion' 
                        tool='Watercolor' 
                        background={bible}
                        id='bible'
                    />
                    <Project 
                        title='Apple' 
                        tool='Watercolor' 
                        background={apple}
                        id='apple'
                    />
                </div>
            </div>
        )
    }
}

export default PortArt