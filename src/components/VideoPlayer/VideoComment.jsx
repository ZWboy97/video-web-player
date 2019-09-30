import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import {VCloudAPI} from "../../axios/apis";
import PropTypes from 'prop-types';
const { TextArea } = Input;


const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${'条回复'}`}
        itemLayout="horizontal"
        pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 10,
        }}
        renderItem={props => /*{console.log('props',props)}*/<Comment {...props}
        />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                添加评论
            </Button>
        </Form.Item>
    </div>
);

class VideoComment extends Component {
    static propTypes = {
        rid:PropTypes.string.isRequired,
    }
    state = {
        comments: [],
        submitting: false,
        value: '',
    };
    componentWillMount(){
        VCloudAPI.get('/video/'+this.props.rid+'/comments/').then(res=>{
            console.log('结果',res)
            let comments = []
            if (res.data.data != null) {
                for (let i = 0;i < res.data.data.length;i++){
                    let comment = {author:res.data.data[i].name,content:res.data.data[i].comment,datetime:res.data.data[i].ctime}
                    comments.push(comment)
                }
            }

            this.setState({comments:comments})
    })}
    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });
        moment.locale('zh-cn')
        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: 'jyl',
                        content: this.state.value,
                        datetime: moment().format('YYYY-MM-DD HH:mm:ss'),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
        let comment_data = {
            aid:'FH3t1B2NMRqvuy54',
            name:'jyl',
            comment:this.state.value,
            ctime:moment().format('YYYY-MM-DD HH:mm:ss')
        }
        VCloudAPI.post('/video/'+this.props.rid+'/comment/add/',comment_data).then(res => {
            console.log('response',res)
        })
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { comments, submitting, value } = this.state;

        return (
            <div>

                <Comment
                    avatar={
                        <Avatar
                            alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
                {comments.length > 0 && <CommentList comments={comments} />}
            </div>
        );
    }
}

export default VideoComment