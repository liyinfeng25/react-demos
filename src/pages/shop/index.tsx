// import React from 'react';
// import { useParams } from 'react-router-dom'
// import { withHooksHoc } from './withHooksHOC'


// function Shop (props: any) {
//   return (
//     <div>
//       我是店铺管理页面,size: {props.size}
//     </div>
//   )
// }

// export default withHooksHoc(Shop);


import React from 'react';
import { useParams } from 'react-router-dom'
import { WithHooksHoc, withScrollHoc } from './withHooksHOC'
import { useScroll } from '@/components/useScroll'


function Shop (props: any) {
  console.log('===>', props)

  return (
    <WithHooksHoc>
      {(size)=> (
        <div>
          我是店铺管理页面,size: {size},
        </div>
      )}
    </WithHooksHoc>
   
  )
}

export default withScrollHoc(Shop);