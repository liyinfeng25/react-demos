import React, { useCallback } from 'react';
import { Card } from 'antd'

const TIME_SE = 10;

function CutDown2 (props: any) {
  const [flag, setFlag] = React.useState(false)
  const [time, setTime] = React.useState(TIME_SE)

  console.log('render')

  React.useEffect(() => {
    let timer;
    function cutdown () {
      setTime((pre) => {
        if (pre <=1) {
          setFlag(false)
          return TIME_SE
        } else {
          timer = setTimeout(cutdown, 1000);
          return pre -1
        }
      })
    }

    if (flag) {
      timer = setTimeout(cutdown, 1000)
    }

    return () => window.clearTimeout(timer)
  }, [flag])
  
  return (
    <Card title="每秒+1-useEffect实现" className="card">
      <div>
        <div style={{ border: '1xp solid #000000' }}>
          时间：{time}秒
          <button onClick={() => setFlag(true)}>start</button>
        </div>
      </div>
    </Card>
  )
}

export default CutDown2;