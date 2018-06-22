import React, { Component } from "react";
import MobileNav from './MobileNav';

const barStyles = {
  hamburger: {
    marginTop: "2em",
    marginRight: "2em",
    zIndex: '1'
  },
  bar: {
    height: "5px",
    width: "50px",
    background: "white",
    border: "none",
    margin: "8px 0",
    transition: "all .3s ease-out"
  }
};

const xStyles = {
  hamburgerX: {
    position: 'absolute',
    top: '8px',
    right: '-2px',
  },
  bar1: {
    transform: "rotate(45deg)",
    background: "rgb(35, 137, 141)"
  },
  bar2: {
    opacity: "0",
    background: "rgb(35, 137, 141)"
  },
  bar3: {
    transform: "rotate(-45deg) translate(18px, -19px)",
    background: "rgb(35, 137, 141)"
  }
};

const duration = 300;

const defaultStyles = {
  transition: `all ${duration}ms ease-out`,
  width: '100%',
  background: '#eaeaea',
  paddingTop: '3em',
  display: 'block',
  position: 'absolute',
  top: 0, left: 0, bottom: 0, right: 0,
  zIndex: '1',
  textAlign: 'left',
  opacity: '0',
  width: '0'
}

const transitionStyles = {
    opacity: '1',
    width: '100%',
    height: '71em',
}

const width = window.innerWidth;

const largeScreen = {
    display: 'none'
}

class Hamburger extends Component {
  state = { 
    x: false 
};

  handleClick = () => {
    this.setState(({ x }) => ({
        x: !x
    }));
  };

  render() {
    const { x } = this.state;
    return (
        <div>
            <div
            style={Object.assign({}, 
                defaultStyles, 
                x && transitionStyles, 
                width >= 700 && largeScreen
            )}>
                { x && <MobileNav /> }
            </div>
            <div className='hamburger' 
                style={Object.assign(
                    {}, barStyles.hamburger, x && xStyles.hamburgerX)} 
                onClick={this.handleClick}>
                <div
                style={Object.assign({}, 
                    barStyles.bar, this.state.x && xStyles.bar1)}
                />
                <div
                style={Object.assign({}, 
                    barStyles.bar, this.state.x && xStyles.bar2)}
                />
                <div
                style={Object.assign({}, 
                    barStyles.bar, this.state.x && xStyles.bar3)}
                />
            </div>
        </div>
    );
  }
}

export default Hamburger;



