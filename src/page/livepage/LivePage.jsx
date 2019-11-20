import React from 'react';
import './style.less';
import { Layout } from 'antd';
import HeaderContainer from 'mycomponents/HeaderContainer';
import ContentContainer from 'mypage/livepage/ContentContainer';
import FooterContainer from 'mycomponents/FooterContainer';
import { VCloudAPI } from 'myaxios/apis';
import { connectAlita } from 'redux-alita';
const { Header, Footer, Content } = Layout;

class IndexPage extends React.Component {

    componentDidMount() {
        const lid = this.props.match.params.id;
        if (!lid) {
            return;
        }
        VCloudAPI.get('/channel/info/?lid=' + lid).then(
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