import React, {Component} from 'react';
import HomePage from '../home/HomePage';
import { Route, Switch } from 'react-router-dom';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import './App.css';


export default class App extends Component {

    render() {
        return (
            <div className='app'>
                <main>
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/about/' component={About} />
                        <Route path='/portfolio/' component={Portfolio} />
                    </Switch>
                </main>
                


            </div>
        );
    }
}