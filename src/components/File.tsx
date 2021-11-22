import React from 'react'
import axios from 'axios'

class Form1 extends React.Component<any, any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      value: 'default',
      file: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // check 函数
  check(headers: any) {
    return (fileUint8Array: any) => 
      fileUint8Array.every((item: any, index: number) => {
        console.log(fileUint8Array, headers)
        return item === headers[index]
      })
  }
  // check str 函数
  checkStr (headersStr: any) {
    return (fileUint8Array: any) => {
      let strType  = ''
      fileUint8Array.forEach((item: any) => strType += item.toString(16))
      return headersStr.startsWith(strType)
    }
  }

  // check 函数：通过文件前缀判断
  stringToBytes (string: any) {
    return [...string].map(item => item.charCodeAt());
  }

  // PNG判断
  isPNG = this.check([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  isPNGByStr = this.checkStr('89504e470d0a');

  // PDF 判断
  isPDF = this.check([0x25, 0x50, 0x44, 0x46]);  // 十进制：[37, 80, 68, 70]
  isPDFByStr = this.checkStr('25504446');
  isPDFByName =  this.check(this.stringToBytes("%PDF"));

  // 读取文件
  FileReader = (blob: any, start = 0, end = 8) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener('load', ()=> {
        let result: any = reader.result;
        resolve(result)
      });
      reader.addEventListener('error', ()=> {
        reject()
      })
      reader.readAsArrayBuffer(blob.slice(0, 4));
    })
  }
  
  // File 文件类型
  async handleUpload (e: any) {
    this.setState({
      file: e.target.files[0]
    })
    console.log(e.target.files[0])
    const buffers: any =  await this.FileReader(e.target.files[0])
    const arr = new Uint8Array(buffers); // Uint8Array(4) [37, 80, 68, 70, buffer: ArrayBuffer(4), byteLength: 4, byteOffset: 0, length: 4]
    console.log('===>', buffers, arr);
    
    console.log('是不是 pdf 文件类型 ===>', this.isPDFByName(arr))
  }

  // 表单包含附件文件，表单上传方式
  handleSubmit (e: any) {
    console.log(this.state)
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('username', 'Chris');
    axios.post('/save', formData , {
      headers: {
        'content-type':'multipart/form-data'
      }
    })
    e.preventDefault()
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            上传文件:
            <input type="file" name="file" multiple onChange={(e) => this.handleUpload(e)}/>
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
}

export default Form1;