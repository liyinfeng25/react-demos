/**
 * 剪贴板上传
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

  const previewImage = (file, container) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      let img = document.createElement("img");
      img.src = e.target.result;
      container.append(img);
    };
    reader.readAsDataURL(file);
  }

  React.useEffect(() => {
    const IMAGE_MIME_REGEX = /^image\/(jpe?g|gif|png)$/i;
    const uploadAreaEle = document.querySelector("#dropArea");

    uploadAreaEle.addEventListener("paste", async (e) => {
      e.preventDefault();
      const files = [];
      if (navigator.clipboard) {
        let clipboardItems = await navigator.clipboard.read();
        for (const clipboardItem of clipboardItems) {
          for (const type of clipboardItem.types) {
            if (IMAGE_MIME_REGEX.test(type)) {
              const blob = await clipboardItem.getType(type);
              previewImage(blob, uploadAreaEle);
              files.push(blob);
            }
          }
        }
      } else {
          const items = e.clipboardData.items;
          for (let i = 0; i < items.length; i++) {
            if (IMAGE_MIME_REGEX.test(items[i].type)) {
              let file = items[i].getAsFile();
              previewImage(file, uploadAreaEle);
              files.push(file);
            }
          }
      }
      if (files.length > 0) {
        var s = confirm("剪贴板检测到图片文件，是否执行上传操作？")
        if (s === true) {
          console.log(file);
          
          setFile(file)
        }
      }
    }); 
  }, []);
  

  return (
    // TODO: 待办
    <Card title="剪贴板上传"  className="file-card">
      <div id="dropArea">
        <p>请先复制图片后再执行粘贴操作</p>
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