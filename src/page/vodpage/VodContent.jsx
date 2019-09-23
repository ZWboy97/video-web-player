import React from 'react';
import './style.less';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoComment from '../../components/VideoPlayer/VideoComment'
import VideoList from '../../components/VideoPlayer/VideoList'
import {VCloudAPI} from "../../axios/apis";
class VodContent extends React.Component {
    state = {
        resource:{}
    }
    componentWillMount(){
        VCloudAPI.get('/com/'+'qWIaiFZTqkwbww6B'+'/resourse?rid=1c2cea05-15f2-40a2-b05a142e-f1686189').then(res=>{
            console.log('res:',res)
            this.setState({resource:res.data.data.resourse})
            // this.props.setAlitaState({
            //     stateName:'vide_src',
            //     data:res.data.data.resourse
            // })
            console.log(this.state.resource)
        })
    }
    render() {
        return (<div className="vod-content">
            <div className="left-content">
                <div className="video-content">
                    <VideoPlayer url={this.state.resource.res_url} title={this.state.resource.name} time={this.state.resource.time}/>
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