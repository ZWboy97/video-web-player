import React from 'react';
import './IndexPage.css';
import { Layout } from 'antd';
import HeaderContainer from './components/HeaderContainer';
import ContentContainer from './components/ContentContainer';
import FooterContainer from './components/FooterContainer';
import { VCloudAPI } from './axios/apis';
import { getUrlParam } from './utils/index';
const { Header, Footer, Content } = Layout;



class IndexPage extends React.Component {

    componentDidMount() {
        const queryString = window.location.search
        console.log(queryString)
        const channel_id = getUrlParam('channel_id');
        console.log('channel_id:', channel_id);
        VCloudAPI.get('/channel/' + channel_id + '/info/').then(
            res => {

            }
        )
    }


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