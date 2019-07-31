import React from 'react';
import MessageList from './MessageList';
import './style.css';
import { Input, Button } from 'antd';
const { TextArea } = Input;

class ChattingPanel extends React.Component {

    render() {
        return (
            <div className='chatting-box'>
                <MessageList className='message-list' />
                <TextArea className='message-input' rows={2} onChange={this.handleChange} />
                <Button className='message-submit-button'
                    htmlType="submit" loading={this.submitting} onClick={this.handleSubmit} type="primary">
                    添加弹幕
            </Button>
            </div>
        )
    }
}

export default ChattingPanel;