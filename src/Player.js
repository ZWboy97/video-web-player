import React,{Component} from 'react';
import "./demo.css";
import Reflv from './Reflv';
import 'antd/dist/antd.css'; 


class videoPlayer extends Component{ 

    render(){
      
        return(
    <div className="mainContainer">
       
        <div className="video-container">
            <div>
            <Reflv
            url={'http://39.106.194.43:8090/live360/1458248448.flv'}
            type="flv"> </Reflv>
            </div>
        </div>

    </div>
            
        );

        }


    }


export default videoPlayer
