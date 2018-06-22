import React, { Component } from 'react';
import './Hero.css';
import { Transition } from 'react-transition-group';


class Intro extends Component {
    state = { on: false }

    componentDidMount() {
        setTimeout(() => {
            this.setState(({ on }) => ({
                on: true
            }))
        }, 2000)
    }

    render() {
        const { on } = this.state;
        const duration = 1000;

        const defaultStyles = {
            transition: `all ${duration}ms ease-out`,
            opacity: 0,
            transform: 'translateX(-10em)',
        };

        const transitionStyles = {
            entering: { opacity: 1, transform: 'translateX(0)' },
            entered: { opacity: 1, transform: 'translateX(0)'}
        }

        return (
            <Transition
            in={on}
            timeout={duration}
            >
            {state => (
                <p id='intro'
                    style={{ ...defaultStyles, ...transitionStyles[state] }}>
                    Hi, I'm Will.
                </p>
            )

            }
            </Transition>
        )
    }
}


class Developer extends Component {
    state = { on: false }

    componentDidMount() {
        setTimeout(() => {
            this.setState(({on}) => ({
                on: true
            }))
        }, 3000)
    }

    render() {
        const { on } = this.state;
        const duration = 1000;

        const defaultStyles = {
            transition: `all ${duration}ms ease-out`,
            opacity: 0,
            transform: 'translateX(-10em)',
        };

        const transitionStyles = {
            entering: { opacity: 1, transform: 'translateX(0)' },
            entered: { opacity: 1, transform: 'translateX(0)'}
        }

        return (
            <Transition
            in={on}
            timeout={duration}
            >
            {
                state => (
                    <p id='developer'
                        style={{ ...defaultStyles, ...transitionStyles[state] }}
                    >
                        I'm a front end developer.
                    </p>
                )
            }
            </Transition>
        )
    }
}


const Hero = () => (
    <div className='hero-div'>
        <Intro />
        <Developer />
    </div>
)


export default Hero;