import React from 'react';
import './style.less';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoComment from '../../components/VideoPlayer/VideoComment'
import VideoList from '../../components/VideoPlayer/VideoList'
import {VCloudAPI} from "../../axios/apis";
import PropTypes from 'prop-types';
import VideoIntro from '../../components/VideoPlayer/VideoIntro'
class VodContent extends React.Component {
    state = {
        resource:{}
    }
    static propTypes = {
        rid:PropTypes.string.isRequired,
    }
    componentWillMount(){
        VCloudAPI.get('/com/'+'qWIaiFZTqkwbww6B'+'/resourse?rid='+this.props.rid).then(res=>{
            console.log('res:',res)
            this.setState({resource:res.data.data.resourse})
            // this.props.setAlitaState({
            //     stateName:'vide_src',
            //     data:res.data.data.resourse
            // })
            console.log('resource:',this.state.resource)
        })
    }
    render() {
        return (<div className="vod-content">
            <div className="left-content">
                <div className="video-content">
                    <VideoPlayer url={this.state.resource.res_url} title={this.state.resource.name} time={this.state.resource.time} videoView={this.state.resource.video_view}/>
                </div>
                <div className="intro-content">
                    <VideoIntro intro={this.state.resource.intro}/>
                </div>
                <div className="comment-content">
                    <VideoComment rid={this.props.rid}/>
                </div>
            </div>
            <div className="right-content">
                <VideoList/>
            </div>

        </div>)
    }

}

export default VodContent;