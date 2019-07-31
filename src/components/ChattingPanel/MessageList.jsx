import React from 'react';
//滚动窗口
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import { List, Spin, message, Avatar, Input, Button, Icon } from 'antd';
import './style.css';

//测试的数据
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
const demo_loading_container = {
    position: "absolute",
    bottom: "40px",
    width: "100%",
    textAlign: "center",
}

class MessageList extends React.Component {

    state = { logining: false };
    state = { visible: false };
    state = {
        data: [],
        loading: false,
        hasMore: true,
        comments: [],
        submitting: false,
        value: '',
        barrList: [],
        onBarrage: true,
    }

    componentDidMount() {
        this.fetchData(res => {
            this.setState({
                data: res.results,
            });
        });
    }

    handleInfiniteOnLoad = () => {
        let { data } = this.state;
        this.setState({
            loading: true,
        });
        if (data.length > 14) {
            message.warning('Infinite List loaded all');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.fetchData(res => {
            data = data.concat(res.results);

            this.setState({
                data,
                loading: false,
            });
        });

    };
    fetchData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };



    render() {
        return (
            <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
                <InfiniteScroll
                    className='scroll-box'
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >
                    <List
                        className='list-box'
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item
                                key={item.id}
                            >
                                <Avatar style={{ verticalAlign: 'middle' }} size="large">
                                    {'hah'}
                                </Avatar>
                                <span>北京市网友</span>
                                <div>
                                    <span>发了一个消息</span>
                                </div>
                            </List.Item>
                        )}
                    >
                        {this.state.loading && this.state.hasMore && (
                            <div className="loading-container">
                                <Spin />
                            </div>
                        )}
                    </List>
                </InfiniteScroll>
            </div >
        );
    }
}

export default MessageList;