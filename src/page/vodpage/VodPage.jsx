import React from 'react';
import './style.css';
import { Layout } from 'antd';
import HeaderContainer from '../../components/HeaderContainer';
import FooterContainer from '../../components/FooterContainer';
import { VCloudAPI } from '../../axios/apis';
import { getUrlParam } from '../../utils/index';
import { connectAlita } from 'redux-alita';
const { Header, Footer, Content } = Layout;

class VodPage extends React.Component {



    render() {
        return (<div>
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