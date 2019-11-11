import React from 'react';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import { List } from 'antd';
import VideoItem from 'mycomponents/VideoItem/RichVideoItem';
import './style.less';


class PortalLiveList extends React.Component {

    render() {
        const { data = [] } = this.props.portal_live_list || [];
        return (
            <div className="livelist-container">
                <div
                    className="livelist-title">
                    直播列表
                </div>
                <div className="live-list">
                    <List
                        grid={{ gutter: 16, column: 6 }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <VideoItem itemInfo={item}></VideoItem>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }

}


export default connectAlita(['portal_live_list'])(withRouter(PortalLiveList));
