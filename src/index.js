import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { HashRouter } from 'react-router-dom';

navigator.serviceWorker.getRegistrations().then(function(registrations) {
 for(let registration of registrations) {
  registration.unregister()
} })

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);