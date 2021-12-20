/**
 * 拖拽上传
 */
import axios from 'axios';
import React from 'react';
import { Card, Divider, Progress } from 'antd';
import ProgressComp from '../comps/progress';

function FileClipboard (props: any) {
  const [file,setFile]: any = React.useState([]);
  const [imgSrc, setImgSrc] = React.useState('');
  const [progress, setProgress] = React.useState(0);
  const [flag, setFlag] = React.useState(false);


  const uploadFile = () => {
    const formData = new FormData();
    file.forEach(i => {
      formData.append('file', i)
    })
    axios.post(
      '/upload/multiple',
      formData,
      {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted)
        }
      }
    ).then((res: any) => {
      setImgSrc(res?.urls)
    })
  }

  React.useEffect(() => {
    const dropAreaEle: any = document.querySelector("#dropArea");
    const imgPreviewEle: any = document.querySelector("#imagePreview");

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropAreaEle.addEventListener(eventName, (e: any) => {
        e.preventDefault();
        e.stopPropagation();
      }, false);
      document.body.addEventListener(eventName, (e: any) => {
        e.preventDefault();
        e.stopPropagation();
      }, false);

    });

    ["dragenter", "dragover"].forEach((eventName) => {
      dropAreaEle.addEventListener(eventName, () => {
        console.log('dragenter", "dragover"');
        setFlag(true);
      }, false);
    });
    ["dragleave", "drop"].forEach((eventName) => {
        dropAreaEle.addEventListener(eventName, () => {
          console.log("dragleave", "drop");
          setFlag(false)
        }, false);
    });

    dropAreaEle.addEventListener("drop", (e: any) => {
      const dt = e.dataTransfer;
      const files: any = [...dt.files];

      // files.forEach((file: any) => {
      //   const IMAGE_MIME_REGEX = /^image\/(jpe?g|gif|png)$/i;
      //   if (IMAGE_MIME_REGEX.test(file.type)) {
      //     const reader = new FileReader();
      //     reader.onload = function (e: any) {
      //       let img: any = document.createElement("img");
      //       img.src = e.target.result;
      //       imgPreviewEle.append(img);
      //     };
      //     reader.readAsDataURL(file);
      //   }
      // });
      setFile(files);
    }, false);
  }, []);
  

  return (
    <Card title="拖拽上传"  className="file-card">
      <div id="dropArea" className={ flag ? 'highlighted' : '' }>
        <div id="imagePreview"></div>
      </div>
      <button id="submit" onClick={() => {uploadFile()}}>上传文件</button>
      <ProgressComp percent={progress} />
      <Divider />
      <div className="imgs">
        { imgSrc.length > 0 &&  imgSrc.map((src: any, index: number) => (
          <img src={src} alt="" key={index} />
        ))}
        </div>
    </Card>
  )
}

export default FileClipboard;