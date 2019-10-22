import React from 'react';
import './style.less';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoComment from '../../components/VideoPlayer/VideoComment'
import VideoList from '../../components/VideoPlayer/VideoList'
import { VCloudAPI } from "../../axios/apis";
import PropTypes from 'prop-types';
import VideoIntro from '../../components/VideoPlayer/VideoIntro';
import { getUrlParam } from '../../utils/index';
class VodContent extends React.Component {
    state = {
        resource: {}
    }
    static propTypes = {
        rid: PropTypes.string.isRequired,
    }
    componentWillMount() {
        let rid = getUrlParam('rid');
        let cid = getUrlParam('cid');
        console.log('rid and cid ', rid, cid);
        VCloudAPI.get(`/com/${cid}/resourse/?rid=${rid}`).then(res => {
            console.log('res:', res)
            if (res.data.code === 200) {
                this.setState({ resource: res.data.data.resourse })
            }
        })
    }
    render() {
        return (<div className="vod-content">
            <div className="left-content">
                <div className="video-content">
                    <VideoPlayer
                        url={this.state.resource.res_url}
                        title={this.state.resource.name}
                        time={this.state.resource.time}
                        videoView={this.state.resource.video_view} />
                </div>
                <div className="intro-content">
                    <VideoIntro intro={this.state.resource.intro} />
                </div>
                <div className="comment-content">
                    <VideoComment rid={this.props.rid} />
                </div>
            </div>
            <div className="right-content">
                <VideoList />
            </div>

        </div>)
    }

}

export default VodContent;