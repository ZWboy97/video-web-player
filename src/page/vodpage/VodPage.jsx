import React from 'react';
import './style.less';
import { Layout } from 'antd';
import HeaderContainer from '../../components/HeaderContainer';
import FooterContainer from '../../components/FooterContainer';
import VodContent from './VodContent';
import { VCloudAPI } from '../../axios/apis';
import { getUrlParam } from '../../utils/index';
import { connectAlita } from 'redux-alita';
const { Header, Footer, Content } = Layout;

class VodPage extends React.Component {
    state={rid:''}
    componentWillMount(){
        let rid = getUrlParam('rid')
        console.log('rid',rid)
        if (rid === null){
            rid = '1c2cea05-15f2-40a2-b05a142e-f1686189'
        }
        this.setState({rid:rid})
    }
    render() {
        return (<div className="page-container">
            <Header className='header-container'>
                <HeaderContainer />
            </Header>

            <Content className='content-container'>
                <VodContent rid={this.state.rid}></VodContent>
            </Content>
            <Footer className='footer-container' style={{ textAlign: 'center' }}>
                <FooterContainer className="footer" />
            </Footer>
        </div>)
    }

}

export default connectAlita()(VodPage);