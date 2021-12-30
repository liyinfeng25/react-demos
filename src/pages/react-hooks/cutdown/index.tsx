import React from 'react';
import { Row, Col } from 'antd'
import Demo1 from './demo1'
import Demo2 from './demo2'
import CutDown from './cutdown'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.light)

function Cutdown () {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Demo1></Demo1>
        </Col>

        <Col span={8}>
          <Demo2></Demo2>
        </Col>

        <Col span={8}>
          <ThemeContext.Provider value={themes.dark}>
            <CutDown></CutDown>
          </ThemeContext.Provider>
        </Col>
      </Row>
    </div>
  )
}

export default Cutdown;