import React,{Component} from 'react';
import {Player, ControlBar} from 'video-react';
import "../node_modules/video-react/dist/video-react.css";
import "./demo.css";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';


class videoPlayer extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputVideoUrl:null
        }
    }
    render(){
      
        return(
            <div>
                <div class="video-container">
                     <Player ref="player" videoid="">
                        <source src="http://media.w3.org/2010/05/sintel/trailer.mp4"></source>
                     </Player>
            </div>
            </div>
        );

    }
}
export default videoPlayer
