import React, { Component } from 'react'
import Modal from './Modal'
import './PortGraphic.css'
import fair from '../images/fair.jpg'
import popoca from '../images/popoca.jpg'
import article from '../images/articlelance.jpg'
import comic from '../images/comic.jpg'
import titan from '../images/titanlogo.jpg'
import mexico from '../images/mexico.jpg'



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
                    id={this.props.id}
                >
                    <img id={this.props.id} src={this.props.background} alt={this.props.id} />
                </Modal>
            </div>
        )
    }
}

class PortGraphic extends Component {
    render() {
        return (
            <div>
                <div className='port-type'><h1>{this.props.type}</h1></div>
                <div className='port-projects'>
                    <Project 
                        title='Woodbury Fair' 
                        tool='Illustrator' 
                        background={fair}
                        id='fair'
                    />
                    <Project 
                        title='Popoca Hot Sauce' 
                        tool='Illustrator' 
                        background={popoca}
                        id='popoca'
                    />
                    <Project 
                        title='Titan Deodorant' 
                        tool='Illustrator' 
                        background={titan}
                        id='titan'
                    />
                    <Project 
                        title='Man or Machine' 
                        tool='Photoshop and Illustrator' 
                        background={article}
                        id='article'
                    />
                    <Project 
                        title='Mediocre Man' 
                        tool='Photoshop and Illustrator' 
                        background={comic}
                        id='comic'
                    />
                    <Project 
                        title='Once Upon a Time in Mexico' 
                        tool='Illustrator' 
                        background={mexico}
                        id='mexico'
                    />
                </div>
            </div>
        )
    }
}

export default PortGraphic