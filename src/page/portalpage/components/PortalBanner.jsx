import React from 'react';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import { Carousel } from 'antd';
import './style.less';


class PortalBanner extends React.Component {

    render() {
        const { data = [] } = this.props.portal_banner_list || {};
        const banner_list = data || [];
        console.log('banner_lsit', banner_list)
        return (
            <div className="banner-container">
                <Carousel autoplay className="carousel-container" >
                    {
                        banner_list.map((item) => {
                            return (
                                <div className="banner-itme-container">
                                    <img
                                        className="banner-item-img"
                                        src={item.picture_url}
                                        alt={item.name} />
                                    <div className="banner-item-title">
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }

}


export default connectAlita(['portal_banner_list'])(withRouter(PortalBanner));
