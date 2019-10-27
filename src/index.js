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
    const mobile_path = getUrlParam('m_path');
    const channel_id = getUrlParam('channel_id');
    console.log('mobile_path', mobile_path, channel_id);
    window.location.href = 'http://mobile.youmu.zwboy.cn/#' + mobile_path + "?channel_id=" + channel_id;
}

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

