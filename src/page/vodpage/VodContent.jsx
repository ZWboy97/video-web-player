import React from 'react';
import './style.less';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoComment from '../../components/VideoPlayer/VideoComment'
import VideoList from '../../components/VideoPlayer/VideoList'
class VodContent extends React.Component {

    render() {
        return (<div className="vod-content">
            <div className="left-content">
                <div className="video-content">
                    <VideoPlayer/>
                </div>
                <div className="comment-content">
                    <VideoComment/>
                </div>
            </div>
            <div className="right-content">
                <VideoList/>
            </div>

        </div>)
    }

}

export default VodContent;