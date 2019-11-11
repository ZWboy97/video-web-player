import React from 'react';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import './style.less';


class PortalVodList extends React.Component {

    render() {
        return (
            <div className="vodlist-container">
                <div
                    className="vodlist-title">
                    点播资源
                </div>
                <div>
                    点播资源列表
                </div>
            </div>
        )
    }

}


export default connectAlita()(withRouter(PortalVodList));
