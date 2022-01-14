import React from 'react';
import './index.less'
import mockData from './data.json'
import { divide } from 'lodash';
const COLUMN_COUNT = 7

function FallsflowPc () {
  const [data, setData]: any = React.useState(mockData.body.data.searchVoList)

  
  
  return (
    // <div className="" style={{ display: 'flex'}}>
    <div className="falls-flow-pc">
      {
       data && data.map((item: any, index: number) => (
          <div className="falls-flow-item">
            <div className="img-box">
              <img src={`https://${item.designTemplateImageUrl}?x-oss-process=image/resize,w_600/sharpen,100/format,webp`} alt="" />
            </div>
            <div className="title">{item.templateTitle}</div>
          </div>
        ))
      }
    </div>
    // </div>
  )
}

export default FallsflowPc