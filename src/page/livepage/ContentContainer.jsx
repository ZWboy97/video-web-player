import React from 'react';
import './style.less';
import HeaderAds from 'mycomponents/Ads/HeaderAds'
import LoginModal from 'mycomponents/Modal/LoginModal';
import VideoPanel from 'mycomponents/VideoPanel/VideoPanel';
import ChattingPanel from 'mycomponents/ChattingPanel/ChattingPanel';
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