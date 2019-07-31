import React from 'react';
import FlvPlayer from './FlvPlayer';
import './style.css';

/**
 * 将视频，弹幕，控制面板等组装成最终的视频面板
 */
class VideoPanel extends React.Component {


    render() {
        return (
            <div className='video-control-box'>
                <div className='video-box'>
                    <div className='video-box-header'>
                        <a className='video-name'>我的直播的名字</a>
                        <img className="video-status" src={require('../../style/image/icon_live.png')}></img>
                    </div>
                    <FlvPlayer
                        className='flv-video-player'
                        url={'http://39.106.194.43:8090/live360/1458248448.flv'}
                        type="flv" />
                    <div className='video-box-control'>
                        控制按钮
                    </div>
                </div>

            </div>
        )
    }
}

export default VideoPanel;