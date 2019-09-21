import axios from 'axios';
import { message } from 'antd';

//视频云后端接口
export const VCloudAPI = createVCloudAPI();

function createVCloudAPI() {
    var Axios = axios.create({
        baseURL: "http://192.168.137.140:9000/",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    return Axios;
}


/**
 *  YAPI Mock 开发测试接口
 *  注意，仅在后端接口未完成的时候，临时开发测试使用
 *  后端开发完成之后，需要切换到VCloudApi并与后端进行联调。
 */
export const YMOCKAPI = axios.create({
    baseURL: 'http://114.116.180.115:3001/mock/11',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})

export const STSAPI = axios.create({
    baseURL: 'http://114.116.180.115:9002/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})

// //点播测试接口
// // export const VODTESTAPI = axios.create({
// //     baseURL: 'http://114.116.180.115:9000/',
// //     headers: {
// //         'Content-Type': 'application/json',
// //     }
// // })