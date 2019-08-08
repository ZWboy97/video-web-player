import React from 'react';
import img from '../../style/image/404.png';

/**
 * 404 Not Found 页面
 */
class NotFound extends React.Component {
    state = {
        animated: ''
    };
    enter = () => {
        this.setState({ animated: 'hinge' })
    };
    render() {
        return (
            <div className="center" style={{ height: '100%', background: '#ececec', overflow: 'hidden' }}>
                <img src={img} alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
            </div>
        )
    }
}

export default NotFound;