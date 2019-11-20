import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

class RichVideoItem extends React.Component {
    render() {
        const itemInfo = this.props.itemInfo || {};
        if (!itemInfo) {
            return;
        }
        return (
            <div className="rich-video-item-container">
                <a
                    href={itemInfo.display_url}
                    target="_target"
                    rel="noopener noreferrer">
                    <img src={itemInfo.picture_url} alt="图片不存在" />
                    <div className="video-item-name">
                        {itemInfo.name}
                    </div>
                </a>
            </div>
        )
    }

}

RichVideoItem.propTypes = {
    itemInfo: PropTypes.object
}


export default RichVideoItem;