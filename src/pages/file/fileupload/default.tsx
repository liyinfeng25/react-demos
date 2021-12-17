import axios from 'axios';
import React from 'react';
import { Card, Divider } from 'antd';

function defaultFileUpload (props: any) {
  const [file,setFile] = React.useState('');
  const [imgSrc, setImgSrc] = React.useState('');

  const onhandleFileChange = (e: any) => {
    setFile(e.target.files[0])
  }

  const uploadFile = () => {
    const formData = new FormData()
    formData.set('file', file)
    axios.post('/upload/single', formData).then(res => {
      setImgSrc(res?.data?.url)
    }).catch(err => {
      console.log(err);
    })
  }


  return (
    <Card title="默认文件上传"  style={{ width: 300 }}>
      <input id="uploadFile" type="file" accept="image/*" onChange={(e) => {onhandleFileChange(e)}}/>
      <button id="submit" onClick={() => {uploadFile()}}>上传文件</button>
      <Divider />
      { imgSrc &&  <>图片链接：<img src={imgSrc} alt="" style={{width: '100%'}}/> </>}
    </Card>
  )
}

export default defaultFileUpload;