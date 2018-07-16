import React, { Component } from 'react';
import { Spring, config } from 'react-spring';


const width = window.innerWidth;

const styles = {
    marginBottom: width < 700 ? '0' : '3px',
    h1Top: width < 700 ? '33px' : '51px',
    svgHeight: width < 700 ? '40' : '52',
    svgWidth: width < 700 ? '205' : '305',
    line1y2: width < 700 ? '34' : '50',
    line2y: width < 700 ? '34' : '49',
}


// svg for vertical line
const Line1 = ({ on, line1y2 }) => (
    <line x1="2" y1="0" x2="2" y2={line1y2}
      style={{ stroke: 'white', strokeWidth: '3', opacity: '1' }}
    />

)

// svg for horizontal line
const Line2 = ({ x2, line2y }) => (
    <line x1="1" y1={line2y} x2={x2} y2={line2y}
      style={{ stroke: 'white', strokeWidth: '3', opacity: '1' }}
    />
)

// svg container
const SVG = ({ on, line2y, line1y2, on2, x2 }) => (
  <svg height={styles.svgHeight} width={styles.svgWidth}>
   <Line1 
     line1y2={line1y2}
     on={on}
   />
   <Line2 
   x2={x2}
   line2y={line2y}
   />
  </svg>
)


class Heading extends Component {
  state = { 
    on: false, 
    on2: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(({ on }) => ({
        on: !on
      }))
    }, 50)

    setTimeout(() => {
      this.setState(({ on2 }) => ({
        on2: !on2
      }))
    }, 800)
  }

  render() {
    const { on, on2 } = this.state;

    return(
      <div className='heading-wrapper'>
        <div className='heading-container'>
            <h1 className='heading-h1' id='h1'
            style={{
                fontSize: styles.fontsize,
                margin: '0',
                marginLeft: '.3em',
                marginBottom: styles.marginBottom,
                position: 'relative',
                top: styles.h1Top, 
                color: 'white'
            }}>
                {this.props.title}
            </h1>
              <Spring
                  to={{ 
                    line1y2: on ? styles.line1y2 : '0',
                    line2y: on ? styles.line2y : '0',
                    x2: on2 ? (width < 700 ? this.props.xSmall : this.props.xLarge) : '2'
                  }}
                  on={on}
                  on2={on2}
                  config={config.slow}
                  children={SVG}
              />
        </div>
      </div>
    )
  }
}

export default Heading;