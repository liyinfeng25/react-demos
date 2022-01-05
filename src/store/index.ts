// Action 创建函数 就是生成 action 的方法
// reducer: 指定了应用状态的变化如何响应 actions 并发送到 store 的
// 一定要保持纯净,单纯执行计算

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import globalData from './global'


export default combineReducers({
  todos,
  visibilityFilter,
  globalData
})
