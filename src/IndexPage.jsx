import React from 'react';
import './IndexPage.css';
import { Layout } from 'antd';
import HeaderContainer from './components/HeaderContainer';
import ContentContainer from './components/ContentContainer';
import FooterContainer from './components/FooterContainer';
const { Header, Footer, Content } = Layout;


class IndexPage extends React.Component {

    render() {
        return (
            <Layout >
                <Header className='header-container'>
                    <HeaderContainer />
                </Header>

                <Content className='content-container'>
                    <ContentContainer />
                </Content>

                <Footer className='footer-container' style={{ textAlign: 'center' }}>
                    <FooterContainer />
                </Footer>
            </Layout>
        )
    }

}

export default IndexPage;