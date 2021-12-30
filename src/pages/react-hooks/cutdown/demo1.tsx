import React, { useCallback } from 'react';
import { Card } from 'antd'

function CutDown1 (props: any) {
  const [time, setTime] = React.useState(0)
  const ref = React.useRef(null)
  const timer = null

  console.log('render', ref)

  
  const handleStart = useCallback(() => {
    ref.current = setInterval(() => {
      setTime(time => time+1)
    }, 500)
  }, [])
 
  const handleEnd = useCallback(() => {
    window.clearTimeout(ref.current)
    ref.current = null;
  }, [])

  
  return (
    <Card title="每秒+1-ref实现" className="card">
      <div>
        <div style={{ border: '1xp solid #000000' }}>
          时间：{time}秒
          <button onClick={handleStart}>start</button>
          <button onClick={handleEnd}>end</button>
        </div>
      </div>
    </Card>
  )
}

export default CutDown1;