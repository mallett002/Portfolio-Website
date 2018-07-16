import React, { Component } from 'react'

const width = window.innerWidth;
const mobileScreen = 700;

class Modal extends Component {
    render() {
        if(!this.props.show) {
            return null;
        }

        // The gray backdrop
        const backdropStyle = {
            position: 'fixed',
            top: 0, bottom: 0, left: 0, right: 0, 
            backgroundColor: 'rgba(0,0,0,0.68)',
            padding: '1em',
            zIndex: 2
        };

        const tallStyles = {
            position: 'relative',
            bottom: '3em'
        }
  
        // The modal "window"
        const modalStyle = {
            backgroundColor: 'white',
            borderRadius: 5,
            margin: '0 auto',
            padding: '1em',
            textAlign: 'center'
        };

        const modalWide = {
            minHeight: 520
        }

        // X styles
        const xStyles = {
            container: {    
                height: '2em',
                width: '2em',
                padding: '1em 1em 0 1em',
                background: '#a7a7a736',
            },
            x: {
                height: 3,
                width: 30,
                background: 'white',
                borderRadius: 2,
                border: 'none',
                margin: 1,
            },
            left: {
                transform: 'rotate(45deg)',
                position: 'relative',
                top: 4
            },
            right: {
                transform: 'rotate(-45deg)',
                position: 'relative',
            }
        };

        return (
            <div className='backdrop' style={backdropStyle}>
                <div className='x-container' 
                    style={Object.assign({}, xStyles.container
                    )}
                    onClick= {this.props.close}
                >
                    <div style={Object.assign({},
                        xStyles.x, xStyles.left
                        )}>
                    </div>
                    <div style={Object.assign({},
                        xStyles.x, xStyles.right
                        )}>
                    </div>
                </div>
                <div className='modal' 
                    style={Object.assign({}, 
                        modalStyle,
                        width > mobileScreen && modalWide,
                        width > mobileScreen && this.props.id === 'article' && 
                            tallStyles, 
                        width > mobileScreen && this.props.id === 'comic' && 
                            tallStyles
                    )}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal