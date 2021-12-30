import React, { useContext } from 'react'
import { ThemeContext } from './index'


function ThemedButton() {
  const theme =  useContext(ThemeContext)
  console.log('==>', ThemeContext, theme)

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}


export default ThemedButton