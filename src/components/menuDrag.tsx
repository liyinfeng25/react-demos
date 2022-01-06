/**
 * 实现菜单栏：伸缩拉伸
 */
import React from 'react';

const MenuDrag = (props: any) => {
  const [width,setWidth] = React.useState(props.width || 200)
  const maxWidth = props?.maxWidth || 260
  const minWidth = props?.minWidth || 160

  const handleOnMouseDown = (e: any) => {
    const startX = e.clientX; 
    
    document.onmousemove = (e: any) => {
      let curWidth: any = `${Number(width) + Number(e.clientX - startX)}`;
      if (curWidth > maxWidth || curWidth < minWidth) return; 
      props.change(curWidth)
      setWidth(curWidth)
    }
    document.onmouseup = () => {
      document.onmousemove = null
    }
    return false;
  }

  return (
    <div className="menu-drag" onMouseDown={handleOnMouseDown} style={{ left: `${width}px` }}></div>
  )
}

export default MenuDrag;
