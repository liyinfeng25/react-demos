import React from "react";
import "./h5.less";
import mockData from "./data.json";
import Tuijian from './tuijian'
const COLUMN_COUNT = 2;



const returnComp = (componentName: string) => {
  const componentList: any = {
    Tuijian: Tuijian,
  };

  const Comp = componentList[componentName]
  console.log('===>', componentName, Comp);
  
  return <Comp />
}

function FallsflowPc() {
  const [data, setData] = React.useState([[], []]);
  const [curcolumnIndex, setCurcolumnIndex]: any = React.useState(null);
  const [curIndex, setCurIndex]: any = React.useState(null);

  React.useEffect(() => {
    let cur = 0;
    const data = [[], []];
    for (let i = 0; i < mockData.body.data.searchVoList.length; i++) {
      const curArr = [].concat(data[cur], mockData.body.data.searchVoList[i++]);
      data.splice(cur, 1, curArr);
      if (cur < COLUMN_COUNT -1) {
        cur++;
      } else {
        cur = 0;
      }
    }
    setData(data);
  }, []);

  const handleClick = (index: number, imgIndex: number) => {
    setCurcolumnIndex(index)
    setCurIndex(imgIndex+1)

    setTimeout(() => {
      const newData = [...data]
      newData[index].splice(imgIndex+1, 0, { isTuijian: true, componentName: 'Tuijian' });
      setData(newData);
      setCurIndex(null)
    }, 200)
  }

  return (
    <div className="falls-flow-h5">
      {data &&
        data.map((item: any, index: number) => (
          <div className="column">
            {
              item.map((imgItem: any, imgIndex: number) => (
                imgItem.isTuijian
                ? returnComp(imgItem.componentName)
                : 
                  <div className="falls-flow-item" onClick={() => handleClick(index,imgIndex )}
                    style={ imgIndex === curIndex && curcolumnIndex === index ? {marginTop: '300px'} : {}}
                  >
                    <div className="img-box">
                      <img
                        src={`https://${imgItem.designTemplateImageUrl}?x-oss-process=image/resize,w_600/sharpen,100/format,webp`}
                        alt=""
                      />
                    </div>
                    <div className="title">{imgIndex}:{curIndex}:{imgItem.templateTitle}</div>
                  </div>
                ))
            }
          </div>
        ))}
    </div>
  );
}

export default FallsflowPc;
