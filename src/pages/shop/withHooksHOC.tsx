// import React from 'react';
// import useScreenSize from './useScreenSize'

// export const withHooksHoc = (Comp) => {
//   return (props: any) => {
//     const size = useScreenSize()

//     return <Comp size={size} {...props} />
//   }
// }


import React from 'react';
import useScreenSize from './useScreenSize'
import { useScroll } from '@/components/useScroll'

export const WithHooksHoc = (Comp) => {
  const size = useScreenSize()

  return Comp.children(size)
}


export const withScrollHoc = (Comp) => {
  return (props: any) => {
    const position = useScroll()

    console.log(position);
    
    return <Comp position={position} {...props} />
  }
}
