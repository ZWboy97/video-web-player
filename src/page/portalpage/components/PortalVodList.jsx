import React from 'react';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import './style.less';


class PortalVodList extends React.Component {

    render() {
        return (
            <div className="vodlist-container">
                点播视频专区

            </div>
        )
    }

}


export default connectAlita()(withRouter(PortalVodList));
