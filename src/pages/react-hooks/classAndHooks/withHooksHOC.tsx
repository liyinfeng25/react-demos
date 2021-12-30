// import React from 'react';
// import useScreenSize from './useScreenSize'

// export const withHooksHoc = (Comp) => {
//   return (props: any) => {
//     const size = useScreenSize()

//     return <Comp size={size} {...props} />
//   }
// }


import React from 'react';
import useScreenSize from '@/components/useScreenSize'
import { useScroll } from '@/components/useScroll'

export const WithHooksHoc = (Comp: any) => {
  const size = useScreenSize()
  return Comp.children(size)
}


export const withScrollHoc = (Comp: any) => {
  return (props: any) => {
    const position = useScroll()
    return <Comp position={position} {...props} />
  }
}
