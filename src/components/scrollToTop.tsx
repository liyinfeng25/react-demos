/** 
 * 滚动复原
 * flag {Boolean} 默认是：true
 */

import React from 'react';
import { useLocation } from 'react-router-dom'
 
interface propsType {
  flag?: boolean;
  children: any;
}

function ScrollToTop (props: propsType) {
  const location = useLocation();
  const { flag = true } = props; 

   React.useEffect(() => {
      // console.log('路由变化，返回顶部', flag);
      flag && window.scroll(0,0);
   }, [location.pathname])

  return (
    <>
      {props.children}
    </>
  )
}

export default ScrollToTop;
