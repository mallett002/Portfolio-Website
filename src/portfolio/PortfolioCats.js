import React, {Component} from 'react'
import Category from './Category'
import todo from '../images/todo.jpg'
import fair from '../images/fair.jpg'
import buildings from '../images/buildings.jpg'
import { Link, Route, Switch } from 'react-router-dom'


class PortfolioCats extends Component {
    render() {
        return (
            <div className='portfolio-cat'>
                    <Link to={`${this.props.match.url}/web/`}>
                        <div onMouseEnter={this.props.web}
                            onMouseLeave={this.props.default}
                        >
                            <Category 
                                label='WEB' 
                                background={todo}
                            />
                        </div>
                    </Link>
                    <Link to={`${this.props.match.url}/graphic/`}>
                        <div
                            onMouseEnter={this.props.graphic}
                            onMouseLeave={this.props.default}
                        >
                            <Category 
                                label='GRAPHICS' 
                                background={fair} />
                        </div>
                    </Link>
                    <Link to={`${this.props.match.url}/art/`}>
                        <div
                            onMouseEnter={this.props.art}
                            onMouseLeave={this.props.default}
                        >
                        <Category 
                            label='ARTWORK' 
                            background={buildings} />
                        </div>
                    </Link>
                </div>
        )
    }
}


export default PortfolioCats