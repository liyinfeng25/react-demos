/**
 * 大文件分块上传
 * 
 * 参考代码：https://mp.weixin.qq.com/s/-iSpCMaLruerHv7717P0Wg
 * 参考代码：https://github.com/semlinker/file-upload-demos/blob/master/big-file-upload/big-file-server.js
 * 
 */
import axios from "axios";
import React from "react";
import SparkMD5 from "spark-md5";
import { Card, Divider, message } from "antd";
import ProgressComp from "../comps/progress";

function Multiple() {
  const [file, setFile] = React.useState([]);
  const [imgSrc, setImgSrc] = React.useState([]);
  const [progress, setProgress] = React.useState(0);

  const onhandleFileChange = (e: any) => {
    console.log(e);
    setFile(Array.from(e.target.files));
  };

  // 3 文件上传
  const upload = ({
    url,
    file,
    fileMd5,
    fileSize,
    chunkSize,
    chunkIds,
    poolLimit = 1,
  }) => {
    const chunks = typeof chunkSize === "number" ? Math.ceil(fileSize / chunkSize) : 1;
    return asyncPool(poolLimit, [...new Array(chunks).keys()], (i) => {
      if (chunkIds.indexOf(i + "") !== -1) {
        // 已上传的分块直接跳过
        return Promise.resolve();
      }
      let start = i * chunkSize;
      let end = i + 1 == chunks ? fileSize : (i + 1) * chunkSize;
      const chunk = file.slice(start, end); // 对文件进行切割
      return uploadChunk({
        url,
        chunk,
        chunkIndex: i,
        fileMd5,
        fileName: file.name,
      });
    });
  };

  // 3: 异步任务并发控制
  const asyncPool = async (poolLimit, array, iteratorFn) => {
    const ret = []; // 存储所有的异步任务
    const executing = []; // 存储正在执行的异步任务
    for (const item of array) {
      // 调用iteratorFn函数创建异步任务
      const p = Promise.resolve().then(() => iteratorFn(item, array));
      ret.push(p); // 保存新的异步任务

      // 当poolLimit值小于或等于总任务个数时，进行并发控制
      if (poolLimit <= array.length) {
        // 当任务完成后，从正在执行的任务数组中移除已完成的任务
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e); // 保存正在执行的异步任务
        if (executing.length >= poolLimit) {
          await Promise.race(executing); // 等待较快的任务执行完成
        }
      }
    }
    return Promise.all(ret);
  };

  // 3  分割后的文件，单独上传
  const uploadChunk = ({ url, chunk, chunkIndex, fileMd5, fileName }) => {
    let formData = new FormData();
    formData.set("file", chunk, fileMd5 + "-" + chunkIndex);
    formData.set("name", fileName);
    formData.set("timestamp", Date.now());
    return axios
      .post(url, formData, {
        onUploadProgress: (e) => {
          const percentCompleted = Math.round((e.loaded * 100) / e.total);
          setProgress(percentCompleted);
        },
      })
      .then((res: any) => {
        console.log('res', res);
      });
  };

  // 4 分割之后的文件，上传完毕之后合并
  const concatFiles = (url, name, md5) => {
    return axios.get(url, {
      params: {
        name,
        md5,
      },
    });
  };

  // 1: 计算文件MD5
  const calcFileMD5 = (file) => {
    return new Promise((resolve, reject) => {
      let chunkSize = 2097152, // 2M
        chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader();

      fileReader.onload = (e) => {
        spark.append(e.target.result);
        currentChunk++;
        if (currentChunk < chunks) {
          loadNext();
        } else {
          resolve(spark.end());
        }
      };

      fileReader.onerror = (e) => {
        reject(fileReader.error);
        reader.abort();
      };

      function loadNext() {
        let start = currentChunk * chunkSize,
          end = start + chunkSize >= file.size ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(file.slice(start, end));
      }
      loadNext();
    });
  };

  // 2: 检测文件是否上传
  const checkFileExist = (name, md5) => {
    return axios
      .get("/upload/exists", {
        params: {
          name,
          md5,
        },
      })
      .then((response) => response.data);
  };

  const handleUploadFile = async () => {
    const curFile = file[0];
    const fileMd5 = await calcFileMD5(curFile); // 计算文件的MD5
    console.log("计算文件的MD5 ==>", fileMd5);
    const fileStatus = await checkFileExist(
      // 判断文件是否已存在
      curFile.name,
      fileMd5
    );
    console.log("判断文件是否已存在 ==>", fileStatus);
    if (fileStatus.isExists && fileStatus.url) {
      message.success("文件秒传");
      return;
    } else {
      console.log('curFile.size', curFile.size);
      
      await upload({
        url: '/upload/single1',
        file: curFile,
        fileMd5,
        fileSize: curFile.size,
        chunkSize: 50 * 1024,
        chunkIds: fileStatus?.chunkIds,
        poolLimit: 3,
      });
    }
    const concatFile = await concatFiles("/upload/concatFiles", curFile.name, fileMd5);
    console.log('concatFile', concatFile);
  };

  return (
    <Card title="大文件分块上传" className="file-card">
      <input
        id="uploadFile"
        type="file"
        multiple
        onChange={(e) => {
          onhandleFileChange(e);
        }}
      />
      <button
        id="submit"
        onClick={() => {
          handleUploadFile();
        }}
      >
        上传文件
      </button>
      <ProgressComp percent={progress} />
      <Divider />
      <div className="imgs">
        {imgSrc.length > 0 && imgSrc.map((src) => <img src={src} alt="" />)}
      </div>
    </Card>
  );
}

export default Multiple;
