import React from 'react';
import logo from '../images/wmlogo.png';
import { Transition } from 'react-transition-group';


class Logo extends React.Component {
    state = { on: false }

    componentDidMount() {
        setTimeout(() => {
            this.setState(({ on }) => ({
                on: true
            }))
        }, 1000)
    }

    render() {
        const { on } = this.state;
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
            in={on}
            timeout={duration}
            >
            {
                state => (
                    <div className='logo-container'
                        style={{...defaultStyles, ...transitionStyles[state]}}
                    >
                        <img id='logo' src={logo} alt='logo' />
                    </div>
                )
            }
                
            </Transition>
        );
    }


}

export default Logo;