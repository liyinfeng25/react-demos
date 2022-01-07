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
import { WithHooksHoc, withScrollHoc } from './withHooksHOC'

function Shop (props: any) {
  return (
    <WithHooksHoc>
      {(size)=> (
        <div>
          组件互相引用,size: {size}
          {
            props.position && Object.keys(props.position).map((item) => (
              <div>{item}: {props.position[item]}</div>
            ))
          }
        </div>
      )}
    </WithHooksHoc>
  )
}

export default withScrollHoc(Shop);