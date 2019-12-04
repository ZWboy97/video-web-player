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

                <div className="ad-content">
                    {
                        ad_pic_url ?
                            <a href={ad_jump_url} target="_blank">
                                <img src={ad_pic_url}></img>
                            </a>
                            :
                            ""
                    }
                </div>
            </div>
        )
    }

}

export default connectAlita()(HeaderAds);