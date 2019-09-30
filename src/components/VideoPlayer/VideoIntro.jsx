import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VideoIntro extends Component {
    static propTypes = {
        intro: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div>
                <p>
                    {this.props.intro}
                </p>
            </div>
        )
    }
}

export default VideoIntro;