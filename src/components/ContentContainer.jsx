import React from 'react';
import './style.css';
import HeaderAds from './Ads/HeaderAds'
import LoginModal from './Modal/LoginModal';
import VideoPanel from './VideoPanel/VideoPanel';
import ChattingPanel from './ChattingPanel/ChattingPanel';
import { Row, Col } from 'antd';

class ContentContainer extends React.Component {

    render() {
        return (
            <div className='content-panel'>
                <LoginModal />
                <HeaderAds />
                <Row type="flex" justify="space-around" align="middle">
                    <Col span={16}>
                        <div className='video-panel'>
                            <VideoPanel />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className='chatting-panel'>
                            <ChattingPanel />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ContentContainer;