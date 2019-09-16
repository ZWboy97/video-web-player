import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import IndexPage from './IndexPage';
import VodPage from './page/vodpage/VodPage';
import NotFound from './page/NotFound';
import { AlitaProvider } from 'redux-alita';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(
    <AlitaProvider>
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/vod/player" push />} />
                <Route path="/live/player" component={IndexPage} />
                <Route path='/vod/player' component={VodPage}></Route>
                <Route component={NotFound} />
            </Switch>
        </Router>
    </AlitaProvider>
    , document.getElementById('root'));

