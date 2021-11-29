import React from 'react'
import ReactDOM from 'react-dom'
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
  <App />, 
  document.getElementById('root')
)
