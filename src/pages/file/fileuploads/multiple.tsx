/**
 * 多文件上传
 */
import axios from 'axios';
import React from 'react'
import { Card, Divider } from 'antd'
import ProgressComp from '../comps/progress';


function Multiple () {
    const [file,setFile] = React.useState([]);
    const [imgSrc, setImgSrc] = React.useState([]);
    const [progress, setProgress] = React.useState(0);

    const onhandleFileChange = (e: any) => {
        console.log(e);
        setFile(Array.from(e.target.files))
    }

    const uploadFile = () => {
        console.log('=====>',file);
        const formData = new FormData();
        file.forEach(i => {
          formData.append('file', i)
        })
        console.log(formData);
        
        axios.post(
        '/upload/multiple',
        formData,
        {
            onUploadProgress: (e) => {
            const percentCompleted = Math.round((e.loaded * 100) / e.total);
            setProgress(percentCompleted)
            }
        }
        ).then((res: any) => {
          setImgSrc(res?.urls)
        })
    }

    return (
        <Card title="多文件上传" className="file-card">
          <input id="uploadFile" type="file" multiple accept="image/*" onChange={(e) => {onhandleFileChange(e)}}/>
          <button id="submit" onClick={() => {uploadFile()}}>上传文件</button>
          <ProgressComp percent={progress} />
          <Divider />
          <div className="imgs">
          { imgSrc.length > 0 &&  imgSrc.map(src => (
            <img src={src} alt="" />
          ))}
          </div>
        </Card>
      )
}

export default Multiple;