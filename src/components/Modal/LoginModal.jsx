import React from 'react';
import { connectAlita } from 'redux-alita';
import { Form, Input, Icon, Modal } from 'antd';
const FormItem = Form.Item;

class LoginModal extends React.Component {

    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }

    handleOk = () => {
        this.props.setAlitaState({
            stateName: 'login_modal_state',
            data: {
                visible: false
            }
        });
    }

    handleCancel = () => {
        this.props.setAlitaState({
            stateName: 'login_modal_state',
            data: {
                visible: false
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { login_modal_state = {} } = this.props.alitaState || {};
        const { data = {} } = login_modal_state || {};
        const { visible } = data || {};
        return (
            <div >
                <Modal
                    title="观众登录"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}


export default connectAlita()(Form.create()(LoginModal));