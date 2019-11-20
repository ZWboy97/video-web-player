import React from 'react';
import './style.less';
import { Layout } from 'antd';
import HeaderContainer from '../../components/HeaderContainer';
import FooterContainer from '../../components/FooterContainer';
import VodContent from './VodContent';
import { connectAlita } from 'redux-alita';
const { Header, Footer, Content } = Layout;

class VodPage extends React.Component {

    render() {
        return (<div className="page-container">
            <Header className='header-container'>
                <HeaderContainer />
            </Header>
            <Content className='content-container'>
                <VodContent ></VodContent>
            </Content>
            <Footer className='footer-container' style={{ textAlign: 'center' }}>
                <FooterContainer className="footer" />
            </Footer>
        </div>)
    }

}

export default connectAlita()(VodPage);