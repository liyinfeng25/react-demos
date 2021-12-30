import React from 'react';
import { createStore } from 'redux'
import counter from '@/store/index'
import { Row, Col } from 'antd'
import Demo1 from './demo1'

const store = createStore(counter);

console.log(store, store.getState())

function ReduxFun () {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Demo1 
            value={store.getState()}
            onAdd={() => store.dispatch({ type: 'ADD' })}
            onDelete={() => store.dispatch({ type: 'DECREMENT' })}
          ></Demo1>
        </Col>
      </Row>
    </div>
  )
}

export default ReduxFun;