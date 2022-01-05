import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd'
import rootStore from '@/store/index'
//TODO: 此处问题引起的原因是什么
// @ts-ignore  
import ScrollToTop from '@components/scrollToTop'
// redux 引入
let store = createStore(rootStore)

console.log('index rootStore==>', rootStore)
console.log('index store==>', store)


import '@assets/iconfont/iconfont.css'
import './index.less'
import App from './app'
import '@/utils/axios'

ReactDOM.render(
  <ConfigProvider>
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)
