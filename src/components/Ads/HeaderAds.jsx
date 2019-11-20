import React from 'react';
import { Carousel } from 'antd';
import { connectAlita } from 'redux-alita';
import './style.less';


class HeaderAds extends React.Component {

    render() {
        const { data } = this.props.alitaState.channel_info || {};
        if (!data) {
            return (<div></div>)
        }
        const { ad_jump_url, ad_pic_url, ad_text } = data || {}

        return (
            <div >
                <Carousel autoplay >
                    <a href={ad_jump_url} target="_blank">
                        <div className="ad-content">
                            {
                                ad_pic_url ? <img src={ad_pic_url}></img> : ""
                            }
                            {/* <span className="ad-text">{ad_text}</span> */}
                        </div>
                    </a>
                </Carousel>
            </div>
        )
    }

}

export default connectAlita()(HeaderAds);