import React from 'react';
import './style.less';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoComment from '../../components/VideoPlayer/VideoComment'
import VideoList from '../../components/VideoPlayer/VideoList'
import { VCloudAPI } from "../../axios/apis";
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoIntro from '../../components/VideoPlayer/VideoIntro';
class VodContent extends React.Component {
    state = {
        resource: {}
    }
    static propTypes = {
        rid: PropTypes.string.isRequired,
    }
    componentDidMount() {
        const rid = this.props.match.params.id;
        if (!rid) {
            return;
        }
        VCloudAPI.get(`/vod/player/?rid=${rid}`).then(res => {
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

export default withRouter(VodContent);