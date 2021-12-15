import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd'
//TODO: 此处问题引起的原因是什么
// @ts-ignore  
import ScrollToTop from '@components/scrollToTop'

import '@assets/iconfont/iconfont.css'
import './index.less'
import App from './app'
import axios from 'axios';

//TODO: axios 全局配置放到utils文件
// axios.interceptors.request.use((config) => {
//   console.log(config)
//   config.baseURL = 'http://localhost:9002/'
//   return config
// });


ReactDOM.render(
  <ConfigProvider>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </ConfigProvider>,
  document.getElementById('root')
)
