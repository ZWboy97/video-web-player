import React from 'react';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import './style.less';


class PortalLiveList extends React.Component {

    render() {
        return (
            <div className="livelist-container">
                <div
                    className="livelist-title">
                    直播列表
                </div>
                <div>
                    下边是直播列表
                </div>
            </div>
        )
    }

}


export default connectAlita(['portal_live_list'])(withRouter(PortalLiveList));
