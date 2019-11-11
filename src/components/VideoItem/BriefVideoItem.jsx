import React from 'react';
import PropTypes from 'prop-types';
import './style.less';


class BriefVideoItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.itemInfo.name}
                这是一个视频组件
            </div>
        )
    }

}

BriefVideoItem.propTypes = {
    itemInfo: PropTypes.string
}


export default BriefVideoItem;