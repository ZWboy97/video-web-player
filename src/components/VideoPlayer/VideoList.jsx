import { Avatar, List } from 'antd';
import React, { Component } from 'react';
import {VCloudAPI} from "../../axios/apis";
import {connectAlita} from 'redux-alita'
class VideoList extends Component{
    state = {
        data_src:[]
    }
    componentWillMount(){
        VCloudAPI.get('/com/'+'qWIaiFZTqkwbww6B'+'/videolist/').then(res=>{
            console.log('res',res)
            let data_src = []
            for (let i = 0;i < res.data.data.length;i++){
                let data = {img: res.data.data[i].pic_url,title:res.data.data[i].name,url:res.data.data[i].res_url,rid:res.data.data[i].rid}
                data_src.push(data)
            }
            this.setState({data_src:data_src})
            console.log(data_src)
            console.log('hhhhhh',this.state.data_src)
            //console.log(typeof(source))
        })
    }

    render(){
        // const {list_data_source = {}} = this.props.alitaState;
        // const {data ={}} = list_data_source || {};
        // console.log('data',data)
        return(
            <div>
                <List
                    size="large"
                    header={<div>猜你想看</div>}
                    //footer={<div>Footer</div>}
                    //bordered
                    dataSource = {this.state.data_src}
                    renderItem={item => <List.Item>
                        <img
                            src={item.img}
                            width={100}
                        />
                        <p>
                            {item.title}
                        </p>
                    </List.Item>}
                />

            </div>
        )
    }
    
}

export default VideoList