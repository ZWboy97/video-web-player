import React from 'react';
import './style.less';
import { Layout } from 'antd';
import HeaderContainer from 'mycomponents/HeaderContainer';
import FooterContainer from 'mycomponents/FooterContainer';
import { VCloudAPI } from 'myaxios/apis';
import { getUrlParam } from 'myutils/index';
import { connectAlita } from 'redux-alita';
const { Header, Footer, Content } = Layout;

class VodPage extends React.Component {

    render() {
        return (<div className="page-container">
            <Header className='header-container'>
                <HeaderContainer />
            </Header>

            <Content className='content-container'>
                这是视频点播界面
            </Content>
            <Footer className='footer-container' style={{ textAlign: 'center' }}>
                <FooterContainer className="footer" />
            </Footer>
        </div>)
    }

}

export default connectAlita()(VodPage);