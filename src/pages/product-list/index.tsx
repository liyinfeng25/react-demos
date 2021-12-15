import React from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'

function ProductList () {
  const data = [11,222, 333,4444];
  const location = useLocation();
  const history = useHistory();

  console.log('location   ==>',location);
  console.log('history  ==>',history);

  const locationChange = (item: any) => {
    history.push(location.pathname+'/'+item)
  }
  
  return (
    <div>
      {
        data.map((item, index) => (
          <li onClick={() => locationChange(item)} key={index}>
            {item}
          </li>
          // <Link to={{ pathname: location.pathname ,state:{ id: item} }}>{item}</Link>
        ))
      }
    </div>
  )
} 

export default ProductList;