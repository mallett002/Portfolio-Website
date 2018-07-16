import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import Logo from './Logo'


class SlideLogo extends Component {
        render() {
        const duration = 1000;

        const defaultStyles = {
            transition: `all ${duration}ms ease-out`,
            opacity: 0,
            transform: 'translateY(-10em)',
        };

        const transitionStyles = {
            entering: { opacity: 1, transform: 'translateY(0)' },
            entered: { opacity: 1, transform: 'translateY(0)'}
        }

        return (
            <Transition
            in={this.props.showLogo}
            timeout={duration}
            >
            {
                state => (
                    <div style={{...defaultStyles, ...transitionStyles[state]}}>
                        <Logo />
                    </div>
                )
            }    
            </Transition>
        );
    }
}


export default SlideLogo;