import React, { PureComponent } from 'react';
import Reflv from 'reflv';


class HttpFlv extends PureComponent {
  render() {
    return (
      <Reflv
        url={'http://39.106.194.43:8090/live360/1458248448.flv'}
        type="flv"
        isLive
        cors
        >
     </Reflv>
    )
  }
}
export default HttpFlv;
