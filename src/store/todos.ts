let nextTodoId = 0

// 新增TODO
export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

// 更新当前todo状态
export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id
})

const DefaultData: any = []

export default (state = DefaultData, action: any) => {
  console.log('===========  todos  =====================');
  
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}
