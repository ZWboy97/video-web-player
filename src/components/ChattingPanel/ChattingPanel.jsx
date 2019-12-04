import React from 'react';
import MessageList from './MessageList';
import './style.css';
import { connectAlita } from 'redux-alita';
import { Input, Button } from 'antd';
const { TextArea } = Input;


class ChattingPanel extends React.Component {

    state = {
        textValue: ""
    }

    handleChange(e) {
        this.setState({
            textValue: e.target.value
        });
    }

    handleSubmit() {
        const { message_list_content = {} } = this.props.alitaState || {};
        const { data = {} } = message_list_content || {}
        const { messageInfo = [], count = 0 } = data || {}

        const inputContent = { 'id': count, 'name': "lalala", 'content': this.state.textValue }
        const newData = [...messageInfo, inputContent]
        this.props.setAlitaState({
            stateName: 'message_list_content',
            data: {
                count: count + 1,
                messageInfo: newData
            }
        })
        this.setState({
            textValue: ""
        });

    }

    render() {
        return (
            <div className='chatting-box'>
                <MessageList />
                <TextArea className='message-input' rows={3}
                    value={this.state.textValue}
                    onChange={(e) => this.handleChange(e)} />
                <Button className='message-submit-button'
                    onClick={() => this.handleSubmit()} type="primary">
                    发送消息
            </Button>
            </div>
        )
    }
}

export default connectAlita()(ChattingPanel);