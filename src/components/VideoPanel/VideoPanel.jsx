import React from 'react';
import FlvPlayer from './FlvPlayer';
import { connectAlita } from 'redux-alita';
import './style.css';

/**
 * 将视频，弹幕，控制面板等组装成最终的视频面板
 */
class VideoPanel extends React.Component {

    render() {
        const { data } = this.props.alitaState.channel_info || {};
        if (!data) {
            return (<div></div>)
        }
        const { live_room_info = {} } = data || {}
        console.log('flv url=', live_room_info.pull_http_flv_url)
        return (
            <div className='video-control-box'>
                <div className='video-box'>
                    <div className='video-box-header'>
                        <p className="video-name">{live_room_info.name || '未知'}</p>
                        <img className="video-status" alt='' src={require('../../style/image/icon_live.png')}></img>
                    </div>
                    <FlvPlayer
                        className='flv-video-player'
                        url={live_room_info.pull_http_flv_url}
                        poster={live_room_info.picture_url}
                        type="flv" />
                    <div className='video-box-control'>
                        控制面板
                    </div>
                </div>
            </div>
        )
    }
}

export default connectAlita()(VideoPanel);