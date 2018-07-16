import React from 'react'
import { Transition } from 'react-transition-group'
import Nav from './Nav'

const duration = 1000;

const defaultStyles = {
    transition: `all ${duration}ms ease-out`,
    opacity: 0,
    transform: 'translateY(-3em)',
}

const transitionStyles = {
    entering: { opacity: .8, transform: 'translateY(0)' },
    entered: { opacity: .8, transform: 'translateY(0)'}
}

const SlideNav = ({ showNav }) => (
    <Transition
        in={showNav}
        timeout={duration}>
    {
        (state) => (
            <div style={{
                ...defaultStyles,
                ...transitionStyles[state]
            }}>
                <Nav />
            </div>
        )
    }
    </Transition>
);

export default SlideNav