import React from 'react';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import './style.less';


class PortalRecommend extends React.Component {

    render() {
        return (
            <div className="recommend-container">
                <div></div>
                推荐列表
            </div>
        )
    }

}


export default connectAlita()(withRouter(PortalRecommend));
