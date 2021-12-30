import React, {  useState, useEffect } from 'react'

const getPosition = () => {
  return {
    // 滚动条X轴滚动距离
    scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft,
    // 滚动条Y轴滚动距离
    scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
    // 窗口可视范围高度
    clientHeight: document.documentElement.clientHeight || document.body.clientHeight,
    // 文档内容实际高度（包括超出视窗的溢出部分）
    scrollHeight: document.documentElement.scrollHeight || document.body.scrollHeight
  };
};

export const useScroll = (props: any) => {
  const [position, setPosition] = useState(getPosition())

  useEffect(() => {
    const handleScroll = () => {
      setPosition(getPosition())
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position;
} 