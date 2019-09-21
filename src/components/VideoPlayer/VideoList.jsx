import { Avatar, List } from 'antd';
import React, { Component } from 'react';
import {VCloudAPI} from "../../axios/apis";
import {connectAlita} from 'redux-alita'

class VideoList extends Component{

    componentWillMount(){
        VCloudAPI.get('com/'+'65b4b6f6-bf3d-4253-879e25b6-40425bd6'+'/videolist/').then(res=>{
            console.log('res',res)
            this.props.setAlitaState({
                stateName:'data_source',
                data:res.data.data
            })

        })
    }

    render(){
        const {data_source = {}} = this.props.alitaState;
        const {data =[]} = data_source || {};
        return(
            <div>
                <List dataSource = {data}>
                </List>
            </div>
        )
    }
    
}

export default connectAlita()(VideoList)