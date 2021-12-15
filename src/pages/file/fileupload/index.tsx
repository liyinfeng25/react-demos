import React from 'react'

import Default from './default'

function FileUploadIndex (props: any) {
  const [visible,setVisible] = React.useState(false);

  return (
    <div>
      <h2>文件上传</h2>
      <Default />
      <div style={visible? {display: 'block'}: {display: 'none'}}>1111</div>
    </div>
  )
}

export default FileUploadIndex