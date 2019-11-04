import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import LivePage from './page/livepage/LivePage';
import VodPage from './page/vodpage/VodPage';
import NotFound from './page/404page/NotFound';
import { AlitaProvider } from 'redux-alita';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IsPC, getUrlParam } from './utils/index';

if (!IsPC()) {
    console.log('location', window.location);
    const pathname = window.location.pathname;
    const pathItem = pathname.split('/');
    if (pathItem[1] === 'vod') {
        window.location.href = 'http://mobile.youmu.zwboy.cn/#/live/display/?channel_id=' + pathItem[3];
    } else if (pathItem[1] === 'live') {
        window.location.href = 'http://mobile.youmu.zwboy.cn/#/live/display/?channel_id=' + pathItem[3];
    }
}

ReactDOM.render(
    <div className="content">
        <AlitaProvider>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/vod/player" push />} />
                    <Route path="/live/player/:id" component={LivePage} />
                    <Route path='/vod/player/:id' component={VodPage}></Route>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </AlitaProvider>
    </div>
    , document.getElementById('root'));

