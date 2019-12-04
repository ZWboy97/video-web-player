import React from 'react';
import './style.less';
import { AVR, VR } from './lib/mxreality';
import * as THREE from 'three';

/**
 * 用于实现各种测试demo 
 */
class VRPlayer extends React.Component {

    componentDidMount() {
        this.init()
    }

    //var vr=new VR(scene,renderer,container);
    init = () => {
        var scene, renderer;
        var container;
        //renderer = new THREE.WebGLRenderer();
        AVR.debug = true;
        if (!AVR.Broswer.isIE() && AVR.Broswer.webglAvailable()) {
            renderer = new THREE.WebGLRenderer();
        } else {
            renderer = new THREE.CanvasRenderer();
        }
        renderer.setPixelRatio(window.devicePixelRatio);
        container = document.getElementById('flv-vr-player');
        container.appendChild(renderer.domElement);



        scene = new THREE.Scene();

        // fov 选项可调整初始视频远近
        var vr = new VR(scene, renderer, container, { "fov": 100 });

        vr.playText = "<img src='img/play90.png' width='40' height='40'/>";
        vr.vrbox.radius = 600;
        if (AVR.isCrossScreen()) {
            // 调整vr视窗偏移量
            vr.effect.separation = 1.2;
        }
        vr.loadProgressManager.onLoad = function () {
            vr.VRObject.getObjectByName("__mxrealityDefault").visible = true;
            vr.video.setAttribute("loop", "loop");
            vr.video.crossOrigin = "Anonymous";
        }
        //AVR.useGyroscope=false;
        vr.init(function () {

        });

        vr.playPanorama('http://39.106.194.43:8090/live/sq3oOJjN6s.flv', vr.resType.flvVideo);




        vr.video.onended = function () {
        }

    }






    render() {
        const mwidth = this.props.width || '100%';
        const mheigh = this.props.height || "100%";
        const myStyle = {
            width: mwidth,
            height: mheigh
        }

        return (
            <div className="test-container">
                <div id="flv-vr-player"
                    className="flv-vr-player"
                    style={myStyle}
                ></div>
            </div >
        )
    }
}

export default VRPlayer;