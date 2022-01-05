import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, random }: any) => {
  return (
    <li
      onClick={onClick}
      style={ {
        textDecoration: completed ? 'line-through' : 'none',
        textAlign: 'left'
      }}
    >
      {text}-{random}
    </li>
  )
}


export default Todo