import axios from 'axios';
import React from 'react';

function defaultFileUpload () {

  const [file,setFile] = React.useState('');

  const onhandleFileChange = (e: any) => {
    setFile(e.target.files[0])
  }

  const uploadFile = () => {
    const formData = new FormData()
    formData.set('file', file)
    console.log(formData);
    
    axios.post('/upload/single', formData)
  }


  return (
    <div>
      <h4>单文件上传</h4>
      <input id="uploadFile" type="file" accept="image/*" onChange={(e) => {onhandleFileChange(e)}}/>
      <button id="submit" onClick={() => {uploadFile()}}>上传文件</button>
    </div>
  )
}

export default defaultFileUpload;