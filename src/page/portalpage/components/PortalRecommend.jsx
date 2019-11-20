import React from 'react';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
import VideoItem from 'mycomponents/VideoItem/RichVideoItem';
import { List } from 'antd';
import './style.less';


class PortalRecommend extends React.Component {

    render() {
        const { data = [] } = this.props.portal_recommend_list || [];
        return (
            <div className="recommend-container">
                <div
                    className="recommend-title"
                >精彩推荐</div>
                <div className="recommend-list">
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


export default connectAlita(['portal_recommend_list'])(withRouter(PortalRecommend));
