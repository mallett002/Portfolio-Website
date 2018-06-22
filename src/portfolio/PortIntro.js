import React, { Component } from 'react'
import CatInfo from './CatInfo'
import PortfolioCats from './PortfolioCats'

const projectTitles = [
    'PROJECTS',
    'WEB DEVELOPMENT',
    'GRAPHIC DESIGN',
    'ARTWORK'
];

const projectInfos = [
    'Hover over the images for information, and click to view.',
    "This is a collection of websites, and web applications created mostly in React JS, not including this portfolio website, which was also created in React. I also used HTML, CSS and Jquery in a few of the projects.",
    'Here you will find some of my graphic design projects, much of which were created using fine art, and taking it into a digital form. Adobe Illustrator, Photoshop, and Indesign were used.',
    'I also have a passion for fine art. Most of these paintings are done in acrylic, but some are watercolors. I really enjoy taking something realistic and changing it in some way to make it interesting.'
];

export default class PortIntro extends Component {
    state = {
        title: projectTitles[0],
        info: projectInfos[0],
    };

    handleDefault = () => {
        this.setState({
            title: projectTitles[0],
            info: projectInfos[0]
        });
    }

    handleWeb = () => {
        this.setState({
            title: projectTitles[1],
            info: projectInfos[1]
        });
    }

    handleGraphic = () => {
        this.setState({
            title: projectTitles[2],
            info: projectInfos[2]
        });
    }

    handleArt = () => {
        this.setState({
            title: projectTitles[3],
            info: projectInfos[3]
        });
    }

    render() {
        const { title, info } = this.state;

        return (
            <div className='port-intro'>
                <CatInfo title={title} info={info} />
                <PortfolioCats 
                    default={this.handleDefault}
                    web={this.handleWeb}
                    graphic={this.handleGraphic}
                    art={this.handleArt}
                    match={this.props.match}
                />
            </div>
        )
    }
}