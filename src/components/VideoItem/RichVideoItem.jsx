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
                <img src={itemInfo.picture_url} alt="图片不存在" />
                <div>
                    {itemInfo.name}
                </div>
            </div>
        )
    }

}

RichVideoItem.propTypes = {
    itemInfo: PropTypes.string
}


export default RichVideoItem;