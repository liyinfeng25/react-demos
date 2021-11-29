import React from 'react';

import DefaultImage from './components/default'

import './index.less'


function DragPage () {
  return (
    <div className="drag-page">
      {/* <h1>拖拽组件</h1> */}
      <div className="left">
          <div className="item">
            <img src="http://img10.360buyimg.com/cms/jfs/t21529/262/428111975/925/7cd6770b/5b0d48c5Ne2f5a26e.png" alt=""/>
            <span>图片热区</span>
          </div>
      </div>

      <div className="content">
        <div className="content-main">
          <DefaultImage />
        </div>
      </div>


      <div className="right"></div>
    </div>
  )
}

export default DragPage;