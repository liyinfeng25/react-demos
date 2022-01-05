import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ addTodo }: any) => {
  let input: any;
  // const [input, setInput] = React.useState('erer')

  return (
    <form
      style={{ textAlign: 'left' }}
      onSubmit={(e) => {
        e.preventDefault()
        // onClick(input)
        // setInput('')
        addTodo(input.value)
        input.value = ''
      }
    }>
      <input type="text" ref={node => input = node} />
      {/* <input type="text" onChange={(e) => setInput(e.target.value)}/> */}

      <button type="submit">add Todo</button>
    </form>
  )
}


export default Todo