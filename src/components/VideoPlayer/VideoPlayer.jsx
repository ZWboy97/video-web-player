import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DPlayer from "react-dplayer";
import './style.less';


class VideoPlayer extends Component {

    static propTypes = {
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        videoView: PropTypes.string.isRequired,
    }

    render() {
        console.log('url:', this.props.url)
        const src_url = this.props.url;
        if (!src_url) {
            return (<div></div>);
        }
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>上传时间：{this.props.time}</p>
                <p>播放量：{this.props.videoView}</p>
                <DPlayer className='video-player'
                    options={{
                        autoplay: false,
                        hotkey: true,
                        mutex: true,
                        volume: 0.1,
                        video: {
                            url: src_url,
                            quality: [
                                {
                                    name: '标清',
                                    url: src_url
                                },
                                {
                                    name: '高清',
                                    url: src_url
                                },
                            ],
                            defaultQuality: 1,
                        }
                    }}
                />
                <p>
                    视频介绍：
                </p>
            </div>
        )
    }

}

export default VideoPlayer