import React, { useCallback } from 'react';
import { Card } from 'antd'




function Redux1 (props: any) {
  const [time, setTime] = React.useState(0)
  const ref = React.useRef(null)

  console.log('Redux1', props)

  
  const handleAdd = () => {
    props.onAdd()
    
  }

  const handleDelete = () => {

  }

  const handleAsyncAdd = () => {

  }

  const handleAsyncDelete = () => {
    
  }
 
  return (
    <Card title="只使用redux" className="card">
      <div>
        <div style={{ border: '1xp solid #000000' }}>
          count: { props.value }
          <hr />
          <button onClick={handleAdd}>加</button>
          <button onClick={handleDelete}>减</button>
          <button onClick={handleAsyncAdd}>异步 加</button>
          <button onClick={handleAsyncDelete}>异步 减</button>
        </div>
      </div>
    </Card>
  )
}

export default Redux1;