import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import IndexPage from './IndexPage';
import NotFound from './components/page/NotFound';
import { AlitaProvider } from 'redux-alita';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(
    <AlitaProvider>
        <Router>
            <Switch>
                <Route path='/live/player/' component={IndexPage} />
                <Route path='/' component={NotFound} />
            </Switch>
        </Router>
    </AlitaProvider>
    , document.getElementById('root'));

