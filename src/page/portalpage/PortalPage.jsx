import React from 'react';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import { Layout, message } from 'antd';
import PortalBanner from './components/PortalBanner';
import PortalRecommend from './components/PortalRecommend';
import PortalLiveList from './components/PortalLiveList';
import PortalVodList from './components/PortalVodList';
import HeaderContainer from 'mycomponents/HeaderContainer';
import { VCloudAPI } from 'myaxios/apis';
import './style.less';
const { Header, Footer, Content } = Layout;


class PortalPage extends React.Component {

    componentWillMount() {
        VCloudAPI.get('/mportal/4ffDN2Ex9Xl6Q5i6/banner_list/')
            .then(res => {
                if (res && res.status === 200 && res.data) {
                    if (res.data.code === 200) {

                        this.props.setAlitaState({
                            stateName: 'portal_banner_list',
                            data: res.data.data || []
                        })
                    }
                }
            })
    }

    render() {
        return (
            <div className="portal-container">
                <Header className='header-container'>
                    <HeaderContainer />
                </Header>
                <PortalBanner></PortalBanner>
                <Content className='content-container'>
                    <PortalRecommend></PortalRecommend>
                    <PortalLiveList></PortalLiveList>
                    <PortalVodList></PortalVodList>
                </Content>

                <Footer className='footer-container' style={{ textAlign: 'center' }}>
                </Footer>

            </div>
        )
    }

}


export default connectAlita(['portal_page_data'])(withRouter(PortalPage));
