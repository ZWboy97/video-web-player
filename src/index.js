import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import VideoPlayer from './Player';
import IndexPage from './IndexPage';
import { AlitaProvider, setConfig } from 'redux-alita';


ReactDOM.render(
    <AlitaProvider>
        <IndexPage />
    </AlitaProvider>
    , document.getElementById('root'));

