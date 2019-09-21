import { PageHeader } from 'antd';
import React, { Component } from 'react';

class VideoPlayer extends Component{

    render() {
        return(
            <div>
                <h1>震惊！wdnmd真就这字号啊</h1>
                <video width={800} height={600} controls={"controls"} >
                    <source src={'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4'}/>
                </video>
            </div>
        )
    }

}

export default VideoPlayer