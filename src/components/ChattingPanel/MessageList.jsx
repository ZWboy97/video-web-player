import React from 'react';
//滚动窗口
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import { List, Spin, message, Avatar, Input, Button, Icon, Row, Col, Divider, Tooltip } from 'antd';
import './style.css';
import { connectAlita } from 'redux-alita';

//测试的数据
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class MessageList extends React.Component {

    constructor(props) {
        super(props)
        this.textInput = null;

        this.setTextInputRef = element => {
            console.log(element)
            this.textInput = element;
        };

        this.focusTextInput = () => {
            console.log(this.textInput)
            // Focus the text input using the raw DOM API
            if (this.textInput) this.textInput.focus();
        };
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }




    render() {
        const { message_list_content = {} } = this.props.alitaState || {};
        const { data = {} } = message_list_content || {}
        const { messageInfo = [] } = data || {}
        console.log(messageInfo)
        return (
            <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
                <InfiniteScroll
                    className='scroll-box'
                    initialLoad={false}
                    pageStart={0}
                    useWindow={false}
                >
                    <List
                        className="list-box"
                        dataSource={messageInfo}
                        renderItem={item => (
                            <List.Item ref={this.setTextInputRef} key={item.id}>
                                <Row>
                                    <Col span={19}>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src="http://pic-cloud-bupt.oss-cn-beijing.aliyuncs.com/3QbpEyjbGT.png" />
                                            }
                                            title={<a href="https://ant.design">{item.name}</a>}
                                            description={<div className="item-content">{item.content}</div>}
                                        />
                                    </Col>
                                </Row>

                            </List.Item>
                        )}
                    >
                        {/* {this.state.loading && this.state.hasMore && (
                            <div className="loading-container">
                                <Spin />
                            </div>
                        )} */}
                    </List>
                    <div style={{ float: "left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }} />
                </InfiniteScroll>
            </div >
        );
    }
}

export default connectAlita()(MessageList);