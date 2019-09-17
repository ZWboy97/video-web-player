import React from 'react';
import img from 'mystyle/image/404.png';
import './style.less';

/**
 * 404 Not Found 页面
 */
class NotFound extends React.Component {

    render() {
        return (
            <div className="center">
                <img
                    className="image"
                    src={img} alt="404" />
            </div>
        )
    }
}

export default NotFound;