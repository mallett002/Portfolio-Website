import React, {Component} from 'react'

const hoveredStyles = {
    h1: { opacity: '1' },
    div: { filter: 'sepia(100%) hue-rotate(120deg) brightness(50%)' }
}

class Category extends Component {
    state = { hovered: false }

    handleHover = () => {
        this.setState(({hovered}) => ({
            hovered: true
        }))
        
    }

    handleLeave = () => {
        this.setState(({hovered}) => ({
            hovered: false
        }))
    }

    render() {
        const { hovered } = this.state;

        return (
            <div>
                <h1 className='wide-h1'
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleLeave}
                  style={Object.assign({}, hovered && {...hoveredStyles.h1})}
                >
                    {this.props.label}
                </h1>
                <div 
                    className='category'
                    style={ Object.assign({},
                        {backgroundImage: `url(${this.props.background})`},
                        hovered && {...hoveredStyles.div})}
                >
                    <h1 className='cat-h1'>{this.props.label}</h1>
                </div>
            </div> 
        )
    }
}
    

export default Category