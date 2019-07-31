import React from 'react';
import { connectAlita } from 'redux-alita';
import { Button } from 'antd';


class HeaderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.showLoginModal = this.showLoginModal.bind(this);
    }

    showLoginModal = () => {
        this.props.setAlitaState({
            stateName: 'login_modal_state',
            data: {
                visible: true,
            }
        })
    }

    render() {
        return (
            <div>
                <Button className="login-button" type="primary" onClick={this.showLoginModal}>登陆</Button>
            </div>
        )
    }
}

export default connectAlita()(HeaderContainer);