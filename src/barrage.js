import React, { Component } from 'react';
import initialSize from './flexiable';

initialSize(window, window['lib'] || (window['lib'] = {}));
export default class Barra extends React.Component {

  constructor(props) {
    super(props);
    this.myCanvas = React.createRef();
  }

  componentDidMount() {
    let _this = this;
    const {
      barrageList,
      color
    } = _this.props;
    let canvas = this.myCanvas.current;
    let ctx = canvas.getContext("2d");
    ctx.font = "bold 10px 黑体";
    let width = canvas.width;
    let colorArr = _this.getColor(color);

    //从左边起
    let numArrL = _this.getLeft();
    //起始高度
    let numArrT = _this.getTop();
    //速度
    let speedArr = _this.getSpeed();

    _this.timer = setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      for (let j = 0; j < barrageList.length; j++) {
        numArrL[j] -= speedArr[j];
        ctx.fillStyle = colorArr[j]
        ctx.fillText(barrageList[j], numArrL[j], numArrT[j]);
        if (numArrL[j] <= -width) {
          numArrL[j] = canvas.width;
        }
      }
      ctx.restore();
    }, 16.7);
  }
  getTop() {
    let _this = this;
    let { barrageList } = this.props;
    let canvas = _this.myCanvas.current;
    let height = canvas.height;
    let len = barrageList.length;
    let arr = new Array(len).fill(1);
    return arr.map(function () {
      let tagHeight = Math.random() * height;
      if (tagHeight < 0.1 * height) {
        return 0.1 * height
      }
      if (tagHeight > 0.9 * height) {
        return 0.9 * height
      }
      console.log(tagHeight)
      return tagHeight
    });
  }
  getLeft() {
    let _this = this;
    let { barrageList } = _this.props;
    let canvas = _this.myCanvas.current;
    let width = canvas.width;
    let len = barrageList.length;
    return new Array(len).fill(width);
  }
  getColor(color) {
    let _this = this;
    let { barrageList } = _this.props;
    let len = barrageList.length;
    //现在颜色是固定的
    //the empty will skip，so fill 1 with the all array
    let arr = new Array(len).fill(1);
    return arr.map(function () {
      return '#' + Math.floor(0x000000).toString(16);
    });
  }
  getSpeed() {
    let _this = this;
    let { barrageList } = _this.props;
    let len = barrageList.length;
    //random speed
    let arr = new Array(len).fill(1);
    return arr.map(
      function () {
        return 1.5
      }
    )
  }
  componentWillUnmount() {
    let _this = this;
    window.clearTimeInterval(_this.timer);
  }
  render() {
    return <div className="m-barrage">
      <canvas className="m-canvas" ref={this.myCanvas}></canvas>
    </div>
  }

}