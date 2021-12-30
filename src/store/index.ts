// // action
// const ADDTODO = () => ({ 
//   type: 'ADD_TODO', 
//   text: 'Go to swimming pool'
// })

// const TOGGLETODO = () => ({ 
//   type: 'TOGGLE_TODO', 
//   index: 1
// })

// const SETVISIBILITYFILTER = () => ({ 
//   type: 'SET_VISIBILITY_FILTER', 
//   filter: 'SHOW_ALL'
// })


// // reducer
// function visibilityFilter(state = 'SHOW_ALL', action) {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter
//     default:
//       return state
//   }
// }

// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'COMPLETE_TODO':
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: true
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }


// import { combineReducers, createStore } from 'redux'
// let reducer = combineReducers({ visibilityFilter, todos })

// export default reducer

// // let store = createStore(reducer)



interface stateType {
  count: number
}

// state
const defaultDate = {
  count: 100
}

// reducer
export default (state = 0, action: any) => {
  switch (action.type) {
    case 'ADD':
      console.log('add===>', state, state + 1)
      return state + 1
    case 'Delete':
      return state - 1
    default:
      return state
  }
}