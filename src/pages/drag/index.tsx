import React from 'react';
import {DragDropContext, Droppable, Draggable}  from 'react-beautiful-dnd';

import DefaultImage from './components/default'
import './index.less'

//初始化数据
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + 1}`,
    content: `this is content ${k + 1}`
}));


function DragPage () {
  const [data, setData]  = React.useState(getItems(11));
  const [data2, setData2]  = React.useState(getItems(3));
  
  const grid = 8;

  // 设置拖拽元素样式
  const getItemStyle = (isDragging: any, draggableStyle: any) => {
    const styleObjs = {
      // 给当前的拖拽元素，添加样式
      userSelect: "none",
      padding: grid * 2,
      margin: `0 0 ${grid}px 0`,
      // fontSize: '30px',
      // 拖拽的时候背景变化
      background: isDragging ? "red" : "#ffffff",
      // 以上样式（优先级更高）和 Class样式都能生效
      ...draggableStyle
    }
    return styleObjs;
  }; 

  const getItemStyle2 = (isDragging: any, draggableStyle: any) => {
    const styleObjs = {
      // 给当前的拖拽元素，添加样式
      userSelect: "none",
      padding: grid * 2,
      margin: `0 0 ${grid}px 0`,
      // fontSize: '30px',
      // 拖拽的时候背景变化
      // background: isDragging ? "red" : "#ffffff",
      // 以上样式（优先级更高）和 Class样式都能生效
      ...draggableStyle
    }
    return styleObjs;
  }

  // 设置拖拽元素包裹组件样式
  const getListStyle1 = () => ({
    background: 'black',
    display: 'inline-block',
    padding: grid,
    width: 250
    // overflow: 'auto',
  });

  // 设置拖拽元素包裹组件样式
  const getListStyle2 = () => ({
    background: 'green',
    display: 'inline-block',
    padding: grid,
    width: 250
    // overflow: 'auto',
  });
 
  const onDragEnd = (e:any) => {
    console.log('onDragEnd', e);
    if (!e.destination) return;

    let sourceIndex = e.source.index;
    let destinationIndex = e.destination.index;

    const sourceData = [...data];
    let removeItem: any = sourceData.splice(sourceIndex, 1)
    sourceData.splice(destinationIndex, 0, ...removeItem);

    setData(sourceData);
  }


  return (
    <div className="drag-page">
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId="1">
          {(provided: any, snapshot: any) => {
            console.log('provided', provided);
            // console.log('snapshot', snapshot);
            return (
              <div
                {...provided.droppableProps}
                // 为了使 droppable 能够正常工作必须 绑定到最高可能的DOM节点中provided.innerRef.
                ref={provided.innerRef}
                style={getListStyle1()}
              >
                {
                  data.map((item: any, index: number) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => {
                        // console.log('provided', provided);  provided：拥有的属性
                        // snapshot: 当前拖拽状态，isDragging
                        // console.log('snapshot', snapshot);  snapshot：快照
                        return (
                          <div 
                            className="item"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            {item.content}
                          </div>
                        )
                      }}
                    </Draggable>
                  ))
                }
                {provided.placeholder}
              </div>
            )
          }}
        </Droppable>
      
      
        <Droppable droppableId="2">
          {(provided: any, snapshot: any) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle2()}
            >
              {
                data2.map((item: any, index: number) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className="item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle2(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))  
                
              }
            </div>
          )}
        </Droppable>
      
      </DragDropContext>
      


      {/* <div className="right"></div> */}
    </div>
  )
}

export default DragPage;