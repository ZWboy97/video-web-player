import React from 'react';
import './style.less';

class VodContent extends React.Component {

    render() {
        return (<div className="vod-content">
            <div className="left-content">
                <div className="video-content">
                    视频组件

                </div>
                <div className="comment-content">
                    评论组件
                </div>
            </div>
            <div className="right-content">
                视频列表组件
            </div>

        </div>)
    }

}

export default VodContent;