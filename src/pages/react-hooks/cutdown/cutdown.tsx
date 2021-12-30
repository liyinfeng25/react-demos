import React, { useCallback } from 'react';
import ThemedButton from './context'

function CutDown (props: any) {
  const [timeDate, setTimeDate] = React.useState(3000) //384969409
  const [timeDateStr, setTimeDateStr] = React.useState('')

  const timerRef = React.useRef(null)

  console.log('render', timerRef)


  // 计算倒计时
  const getTimeDate = () => {
    timerRef.current.timer = setInterval(() => {
      setTimeDate((timeDate) => {
        let day = Math.floor(timeDate / 1000 / 60 / 60 / 24);
        let hour = Math.floor(timeDate / 1000 / 60 / 60 % 24);
        let minute = Math.floor(timeDate / 1000 / 60 % 60);
        let second = Math.floor(timeDate / 1000 % 60);
        let ms = Math.floor(timeDate / 100 % 10);
        if (timeDate <= 0) {
          clearInterval(timerRef.current.timer)
          setTimeDateStr('活动结束')
        } else {
          setTimeDateStr(`${day}天 ${hour}时 ${minute}分 ${second}秒 ${ms}`) 
        }
        timerRef.current.timeDate = timeDate-1000
        return timeDate-1000
      })
    }, 1000)
  }

  React.useEffect(() => {
    getTimeDate()
  }, [])
  
  return (
    <div  ref={timerRef}>
      <div style={{ border: '1xp solid #000000' }}>
        倒计时：{timeDateStr}
        <ThemedButton></ThemedButton>
      </div>
    </div>
   
  )
}

export default CutDown;