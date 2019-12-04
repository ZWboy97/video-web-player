import React from 'react';
//滚动窗口
import InfiniteScroll from 'react-infinite-scroller';
import { List, Avatar, Row, Col } from 'antd';
import './style.css';
import { connectAlita } from 'redux-alita';

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
            <div style={{ width: '100%', height: "400px", overflow: 'auto' }}>
                <InfiniteScroll
                    className='scroll-box'
                    initialLoad={false}
                    pageStart={0}
                    useWindow={true}
                >
                    <List
                        className="list-box"
                        dataSource={messageInfo}
                        renderItem={item => (
                            <List.Item ref={this.setTextInputRef} key={item.id}>
                                <Row>
                                    <div>
                                        <Avatar
                                            className="message-avatar"
                                            src="http://pic-cloud-bupt.oss-cn-beijing.aliyuncs.com/3QbpEyjbGT.png" />
                                        <span
                                            className="message-name"
                                        >{item.name}</span>
                                    </div>
                                    <div className="message-content">{item.content}</div>
                                </Row>
                            </List.Item>
                        )}
                    >
                    </List>
                    <div style={{ float: "left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }} />
                </InfiniteScroll>
            </div >
        );
    }
}

export default connectAlita()(MessageList);