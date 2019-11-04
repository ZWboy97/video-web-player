import { List } from 'antd';
import React, { Component } from 'react';
import { VCloudAPI } from "../../axios/apis";
import { withRouter } from 'react-router-dom';
import { getUrlParam } from '../../utils/index';
class VideoList extends Component {
    state = {
        data_src: []
    }
    componentWillMount() {
        const rid = this.props.match.params.id;
        if (!rid) {
            return;
        }
        VCloudAPI.get(`/vod/recommend_list/?rid=${rid}`).then(res => {
            console.log('rid:', res.data);
            if (res && res.status === 200 && res.data && res.data.code === 200 && res.data.data) {
                this.setState({ data_src: res.data.data });
            }
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
                        <a href={`/vod/player/${item.rid}`}>
                            < List.Item >
                                <img
                                    src={item.picture_url}
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
                                    {item.name}
                                </div>
                                <p style={{
                                    position: 'relative', top: '20px',
                                    left: '-100px', fontSize: '13px',
                                    minWidth: '100px', color: '#000000'
                                }}>
                                    播放量：{item.video_view}
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