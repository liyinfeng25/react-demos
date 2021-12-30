import React, {useState, useEffect} from 'react'

function useScreenSize () {
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleSize = (e: any) => {
      setSize(e.target.innerWidth)
    }

    window.addEventListener('resize', (e) => {
      console.log('屏幕尺寸变化')
      handleSize(e)
    })

    return () => {
      window.removeEventListener('resize', (e) => {
        console.log('取消事件监听')
        handleSize(e)
      })
    }
  }, [])
  
  return size
}

export default  useScreenSize;