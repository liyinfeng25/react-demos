import React from 'react'
import { Row, Col } from 'antd'
import Single from './fileuploads/single'
import Multiple from './fileuploads/multiple'
import Directory from './fileuploads/directory'
import DirectoryZip from './fileuploads/directoryZip'
import FileDrag from './fileuploads/fileDrag'
import FileClipboard from './fileuploads/fileClipboard'
import FileSlice from './fileuploads/fileSlice'
import './fileuploads/index.less';


function FileUploadIndex (props: any) {
  const [visible,setVisible] = React.useState(false);

  return (
    <div>
      <h2>文件上传</h2>
      <Row>
        <Col span={8}>
          <Single />
        </Col>
        <Col span={8}>
          <Multiple />
        </Col>
        <Col span={8}>
          <Directory />
        </Col>
        <Col span={8}>
          <DirectoryZip />
        </Col>
        <Col span={8}>
          <FileDrag />
        </Col>
        <Col span={8}>
          <FileClipboard />
        </Col>
        <Col span={8}>
          <FileSlice />
        </Col>
      </Row>
      {/* <div style={visible? {display: 'block'}: {display: 'none'}}>1111</div> */}
    </div>
  )
}

export default FileUploadIndex