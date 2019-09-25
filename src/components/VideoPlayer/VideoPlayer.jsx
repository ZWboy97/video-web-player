import {PageHeader} from 'antd';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import {connectAlita} from 'redux-alita'

class VideoPlayer extends Component {

    static propTypes = {
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        time:PropTypes.string.isRequired,
    }

    render() {
        console.log('url:', this.props.url)
        // const {video_src = {}} = this.props.alitaState
        // console.log(video_src)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>上传时间：{this.props.time}</p>
                <p>1000播放.'</p>
                <video width='90%' height='600' controls={"controls"}>
                    {this.props.url ?
                        <source src={this.props.url}/>
                        : <p> 无效资源 </p>
                    }
                </video>
                <p>
                    视频介绍：
                </p>
            </div>
        )
    }

}

export default VideoPlayer