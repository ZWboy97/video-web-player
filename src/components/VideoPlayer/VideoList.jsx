import { List } from 'antd';
import React, { Component } from 'react';
import { VCloudAPI } from "../../axios/apis";
import { Link, withRouter } from 'react-router-dom';
import { getUrlParam } from '../../utils/index';
class VideoList extends Component {
    state = {
        data_src: []
    }
    componentWillMount() {
        let cid = getUrlParam('cid');
        VCloudAPI.get('/com/' + cid + '/videolist/').then(res => {
            let data_src = []
            for (let i = 0; i < res.data.data.length; i++) {
                let data = { img: res.data.data[i].pic_url, title: res.data.data[i].name, url: res.data.data[i].res_url, rid: res.data.data[i].rid }
                data_src.push(data)
            }
            this.setState({ data_src: data_src });
        })
    }

    render() {
        return (
            <div>
                <List
                    size="large"
                    header={<div>猜你想看</div>}
                    dataSource={this.state.data_src}
                    renderItem={item =>
                        <a href={`/vod/player/?rid=${item.rid}&cid=${getUrlParam('cid')}&m_path=${getUrlParam('m_path')}`}>
                            < List.Item >
                                <img
                                    src={item.img}
                                    width={100}
                                    alt=""
                                />
                                <div
                                    style={{
                                        position: 'relative', top: '-20px',
                                        minWidth: '100px', maxWidth: '100px',
                                        color: '#000000', marginLeft: '5px',
                                        fontSize: '18px'
                                    }}>
                                    {item.title}
                                </div>
                                <p style={{
                                    position: 'relative', top: '20px',
                                    left: '-100px', fontSize: '13px',
                                    minWidth: '100px', color: '#000000'
                                }}>
                                    上传者：jyl &emsp;<br />播放量：1000
                                </p>
                            </List.Item>
                        </a>
                    }
                />

            </div >
        )
    }

}

export default withRouter(VideoList);