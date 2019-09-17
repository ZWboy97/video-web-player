import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import LivePage from './page/livepage/LivePage';
import VodPage from 'mypage/vodpage/VodPage';
import NotFound from 'mypage/404page/NotFound';
import { AlitaProvider } from 'redux-alita';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(
    <div className="content">
        <AlitaProvider>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/vod/player" push />} />
                    <Route path="/live/player" component={LivePage} />
                    <Route path='/vod/player' component={VodPage}></Route>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </AlitaProvider>
    </div>
    , document.getElementById('root'));

