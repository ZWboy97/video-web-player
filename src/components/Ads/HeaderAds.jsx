import React from 'react';
import { Carousel } from 'antd';



class HeaderAds extends React.Component {

    render() {
        return (
            <div >
                <Carousel autoplay >
                    <div>
                        <img src={require('../../style/image/banner.png')} />
                    </div>
                    <div>
                        <h3>广告位2</h3>
                    </div>
                    <div>
                        <h3>广告位3</h3>
                    </div>
                    <div>
                        <h3>广告位4</h3>
                    </div>
                </Carousel>
            </div>
        )
    }

}

export default HeaderAds;