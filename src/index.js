import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './Player';
import './App.css'
import { AlitaProvider, setConfig } from 'redux-alita';  // https://github.com/yezihaohao/redux-alita
import './index.css';


ReactDOM.render(
    <AlitaProvider>
        <VideoPlayer/>
    </AlitaProvider>

, document.getElementById('root'));

