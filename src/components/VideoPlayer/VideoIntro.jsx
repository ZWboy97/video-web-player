import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VodContent from "../../page/vodpage/VodContent";

class VideoIntro extends Component {
    static propTypes = {
        intro:PropTypes.string.isRequired,
    }

    render(){
        return(
            <div>

                <p>
                    {this.props.intro}
                </p>
            </div>
        )
    }
}

export default VideoIntro;