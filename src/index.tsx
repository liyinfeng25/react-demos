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
