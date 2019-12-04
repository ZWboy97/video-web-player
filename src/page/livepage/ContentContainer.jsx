import React from 'react';
import './style.less';
import HeaderAds from 'mycomponents/Ads/HeaderAds'
import VideoPanel from 'mycomponents/VideoPanel/VideoPanel';
import ChattingPanel from 'mycomponents/ChattingPanel/ChattingPanel';

class ContentContainer extends React.Component {

    render() {
        return (
            <div >
                <HeaderAds className="header-ads" />
                <div className='content-panel'>
                    <div className='video-panel'>
                        <VideoPanel />
                    </div>
                    <div className='chatting-panel'>
                        <ChattingPanel />
                    </div>
                </div>

            </div>
        )
    }
}

export default ContentContainer;