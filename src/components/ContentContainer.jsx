import React from 'react';
import './style.css';
import HeaderAds from './Ads/HeaderAds'
import LoginModal from './Modal/LoginModal';
import VideoPanel from './VideoPanel/VideoPanel';
import ChattingPanel from './ChattingPanel/ChattingPanel';

class ContentContainer extends React.Component {

    render() {
        return (
            <div className='content-panel'>
                <LoginModal />
                <HeaderAds />
                <div className='video-chatting-panel'>
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