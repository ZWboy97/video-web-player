import React,{Component} from 'react';
import "./demo.css";
import flvjs from "flv.js";

var player = document.getElementById('videoElement');
if (flvjs.isSupported()) {
    var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://39.106.194.43:8090/live360/1458248448.flv'
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load(); //Load
}

class videoPlayer extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            videoElement
        }
    }
    render(){
      
        return(
    <div class="mainContainer">
        <div class="video-container">
            <script type="text/label" src="flv.js"></script>
            <div>
                <video name="videoElement" class="centeredVideo" controls autoplay>
                    Your browser is too old which doesn't support HTML5 video.
                </video>
            </div>
        </div>

    </div>
            
        );

        }
        player(){
            this.setState()
        }

    }


export default videoPlayer
