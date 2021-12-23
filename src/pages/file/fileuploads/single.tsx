/**
 * 单文件上传
 */
import axios from 'axios';
import React from 'react';
import { Card, Divider, Progress } from 'antd';
import ProgressComp from '../comps/progress';

function defaultFileUpload (props: any) {
  const [file,setFile] = React.useState('');
  const [imgSrc, setImgSrc] = React.useState('');
  const [progress, setProgress] = React.useState(0);

  const onhandleFileChange = (e: any) => {
    setFile(e.target.files[0])
  }

  const uploadFile = () => {
    //NOTE: FormData 对象作用
    // FormData.append(表单文件名称, 表单值，文件名称(默认是name))
    const formData = new FormData();
    formData.set('file', file)
    axios.post(
      '/upload/single',
      formData,
      {
        // 监听上传进度
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(progressEvent,percentCompleted);
          setProgress(percentCompleted)
        }
      }
    ).then((res: any) => {
      setImgSrc(res?.url)
    })
  }


  return (
    <Card title="单文件上传"  className="file-card">
      <input id="uploadFile" type="file" accept="image/*" onChange={(e) => {onhandleFileChange(e)}}/>
      <button id="submit" onClick={() => {uploadFile()}}>上传文件</button>
      <ProgressComp percent={progress} />
      <Divider />
      <div className="imgs">
        { imgSrc &&  <>图片链接：<img src={imgSrc} alt="" style={{width: '100%'}}/> </>}
      </div>
    </Card>
  )
}

export default defaultFileUpload;