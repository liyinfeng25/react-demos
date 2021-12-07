import React from 'react'
import ReactDOM from 'react-dom'
// react-router-dom 文档地址：https://v5.reactrouter.com/web/guides/quick-start
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// https://ant.design/components/config-provider-cn/
import { ConfigProvider } from 'antd'

import '@assets/iconfont/iconfont.css'
import './index.less'
import App from './app'

import axios from 'axios';

axios.interceptors.request.use((config) => {
  console.log(config)
  config.baseURL = 'http://localhost:9002/'
  return config
});


ReactDOM.render(
  <ConfigProvider>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </ConfigProvider>,
  document.getElementById('root')
)
