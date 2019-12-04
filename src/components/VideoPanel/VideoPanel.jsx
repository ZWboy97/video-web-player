import React from 'react';
import { connectAlita } from 'redux-alita';
import flvjs from 'flv.js/dist/flv.min.js';
import DPlayer from 'react-dplayer';
import './style.css';
import VRPlayer from '../VRVideoPlayer/VRVideoPlayer';
import { message, notification } from 'antd';

/**
 * 将视频，弹幕，控制面板等组装成最终的视频面板
 */
class VideoPanel extends React.Component {

    state = {
        hasNotification: false
    }

    render() {
        const { data } = this.props.alitaState.channel_info || {};
        if (!data) {
            return (<div></div>)
        }
        const { live_room_info = {} } = data || {}
        console.log('flv url=', live_room_info.pull_http_flv_url)
        if (!this.state.hasNotification && live_room_info.kind === 2) {
            this.setState({ hasNotification: true })
            notification['info']({
                message: '这是一场360°的全景直播哦！',
                description:
                    '鼠标滑动视频可以切换全景观看视角，全屏观看更佳！',
                duration: 0,
                placement: "topLeft"
            });

        }
        return (
            <div className='video-control-box'>
                <div className='video-box'>
                    <div className='video-box-header'>
                        <p className="video-name">{live_room_info.name || '未知'}</p>
                        <img className="video-status" alt='' src={require('../../style/image/icon_live.png')}></img>
                    </div>
                    {
                        live_room_info.kind !== 2 ?
                            <DPlayer
                                className="flv-video-player"
                                options={{
                                    autoplay: true,
                                    live: true,
                                    hotkey: true,
                                    screenshot: true,
                                    mutex: true,
                                    volume: 0.1,
                                    video: {
                                        url: live_room_info.pull_http_flv_url,
                                        type: "customFlv",
                                        customType: {
                                            customFlv: function (video, player) {
                                                const flvplayer = flvjs.createPlayer({
                                                    type: 'flv',
                                                    url: video.src,
                                                });
                                                flvplayer.attachMediaElement(video);
                                                flvplayer.load();
                                            },
                                        },
                                        quality: [
                                            {
                                                name: '标清',
                                                url: live_room_info.pull_http_flv_url,
                                                type: 'customFlv',
                                            },
                                            {
                                                name: '高清',
                                                url: live_room_info.pull_http_flv_url,
                                                type: 'customFlv',
                                            },
                                        ],
                                        defaultQuality: 1,
                                    },
                                }}
                            />
                            :
                            <VRPlayer
                                width={950} height={550}
                                url={live_room_info.pull_http_flv_url}
                            />

                    }

                    <div className='video-box-control'>
                        直播
                    </div>
                </div>
            </div>
        )
    }
}

export default connectAlita()(VideoPanel);