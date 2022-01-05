import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Todo from './todos'
import AddTodo from './addTodos'
import { addTodo, toggleTodo } from '@/store/todos'
import { setVisibilityFilter } from '@/store/visibilityFilter'
import { updateUserinfo } from '@/store/global'

const TodoList = (props: any) => {
  console.log('TodoList=====>', props)
 
  // bindActionCreators
  const { todos,visibilityFilter,userInfo } = props
  const { addTodo, toggleTodo, setVisibilityFilter, updateUserinfo } = props

  // mapDispatchToProps 方式
  // const { todos,visibilityFilter,userInfo, onTodoClick, updateInfo, onTodoAddClick, onFilterClick } = props

  return (
    <div>
      {/* <AddTodo onClick={(text: string) => props.addTodo(text)}></AddTodo> */}
      <AddTodo addTodo={addTodo}></AddTodo>

      <ul>
        {todos.map((todo: any, index: number) => (
          <Todo key={index} {...todo} onClick={() => toggleTodo(index)} />
        ))}
      </ul>
      <hr />
      {
        ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'].map((item: any, index: number) => (
          <button
            disabled={visibilityFilter === item}
            key={index}
            onClick={() => setVisibilityFilter(item)}
          >
            {item}
          </button>
        ))
      }

      <hr />
      <button
        onClick={() => updateUserinfo({name:'liyinfeng', misId: 'liyinfeng02'})}
      >
        更新信息
      </button>
      {
        Object.keys(userInfo).map(item => (
          <span key={item}>{item}:{userInfo[item] ? userInfo[item] : '暂无'}</span>
        ))
      }
    </div>
   
  )
}

// 过滤 todos 数据
const getVisibleTodos = (todos: any, filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTodoAddClick: (text: string) => dispatch(addTodo(text)),
    onTodoClick: (id: number) => dispatch(toggleTodo(id)),
    onFilterClick: (filter: string) => dispatch(setVisibilityFilter(filter)),
    updateInfo: (info: any) => dispatch(updateUserinfo(info)),
  }
}

// export default TodoList
export default connect(
  (state: any, ownProps: any) => {
    console.log('state==>', state, ownProps);
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter),
      visibilityFilter: state.visibilityFilter,
      ...state.globalData
    }
  },
  // mapDispatchToProps
  (dispatch: any) => bindActionCreators({ addTodo, toggleTodo, setVisibilityFilter, updateUserinfo }, dispatch)
)(TodoList);