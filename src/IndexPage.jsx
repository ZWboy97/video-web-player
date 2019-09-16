import React from 'react';
import './IndexPage.css';
import { Layout } from 'antd';
import HeaderContainer from './components/HeaderContainer';
import ContentContainer from './page/LivePage';
import FooterContainer from './components/FooterContainer';
import { VCloudAPI } from './axios/apis';
import { getUrlParam } from './utils/index';
import { connectAlita } from 'redux-alita';
const { Header, Footer, Content } = Layout;

class IndexPage extends React.Component {

    componentDidMount() {
        const channel_id = getUrlParam('channel_id');
        console.log('channel_id:', channel_id);
        VCloudAPI.get('/channel/info/?lid=' + channel_id).then(
            res => {
                if (res.status !== 200) {
                    return
                }
                const { data } = res.data
                this.props.setAlitaState({
                    stateName: 'channel_info',
                    data: data
                });
                const { live_room_info = {} } = data || {};
                document.title = "直播：" + live_room_info.name;
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
                    <FooterContainer className="footer" />
                </Footer>
            </Layout>
        )
    }

}

export default connectAlita()(IndexPage);