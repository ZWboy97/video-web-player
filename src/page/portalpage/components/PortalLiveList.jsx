import React from 'react';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import './style.less';


class PortalLiveList extends React.Component {

    render() {
        return (
            <div className="livelist-container">
                视频门户

            </div>
        )
    }

}


export default connectAlita()(withRouter(PortalLiveList));
