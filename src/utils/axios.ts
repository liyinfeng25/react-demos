import axios from 'axios';
import { message } from 'antd';


// 请求拦截
axios.interceptors.request.use((config) => {
  console.log(config)
  config.baseURL = 'http://localhost:9002/'
  return config
});

// 响应拦截
axios.interceptors.response.use((res) => {
  const {data}  = res;
  if (data?.code === 0) {
    return data
  } else {
    message.error(data?.msg)
  }
}, (err) => {
  message.error(err.message || '请求失败')
})