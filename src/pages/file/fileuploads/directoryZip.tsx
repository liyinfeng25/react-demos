/**
 * 压缩目录上传
 */
import axios from 'axios';
import React from 'react'
import { Card, Divider } from 'antd'
import JSZip from 'JSZip'
import ProgressComp from '../comps/progress';


function DirectoryZip () {
    const [file,setFile]: any = React.useState([]);
    const [imgSrc, setImgSrc] = React.useState([]);
    const [progress, setProgress] = React.useState(0);

    const onhandleFileChange = (e: any) => {
        setFile(Array.from(e.target.files))
    }

    const generateZipFile = (zipFileName: string, files: any) => {
      return new Promise((resolve, reject) => {
        const zip = new JSZip();
        for (let i = 0; i < files.length; i++) {
          zip.file(files[i].webkitRelativePath, files[i]);
        }
        zip.generateAsync({ type: "blob", compression: "DEFLATE" }).then((blob) => {
          zipFileName = `${zipFileName || Date.now()}`;
          const zipFile = new File([blob], zipFileName, {
            type: "application/zip",
          });
          resolve(zipFile);
        });
      });
    }

    const uploadFile = async () => {
        const zipFileName = `${file[0].webkitRelativePath.split('/')[0]}.zip`;
        const zipFile: any = await generateZipFile(zipFileName, file);

        const formData = new FormData();
        formData.set('file', zipFile, zipFileName);
        
        axios.post(
        '/upload/single',
        formData,
        {
            onUploadProgress: (e) => {
            const percentCompleted = Math.round((e.loaded * 100) / e.total);
            console.log(e);
            
            setProgress(percentCompleted)
            }
        }
        ).then((res: any) => {
          setImgSrc(res?.url)
        })
    }

    return (
        <Card title="压缩目录上传" className="file-card">
          <input id="uploadFile" type="file"  accept="image/*" onChange={(e) => {onhandleFileChange(e)}} webkitdirectory={true.toString()} />
          <button id="submit" onClick={() => {uploadFile()}}>上传文件</button>
          <ProgressComp percent={progress} />
          <Divider />
          <div className="imgs">
          { imgSrc &&  <div>{imgSrc}</div>}
          </div>
        </Card>
      )
}

export default DirectoryZip;