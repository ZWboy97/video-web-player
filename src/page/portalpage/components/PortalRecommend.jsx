import React from 'react';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import './style.less';


class PortalRecommend extends React.Component {

    render() {
        return (
            <div className="recommend-container">
                <div
                    className="recommend-title"
                >精彩推荐</div>
                <div>
                    下边是视频列表
                </div>
            </div>
        )
    }

}


export default connectAlita(['portal_recommend_list'])(withRouter(PortalRecommend));
