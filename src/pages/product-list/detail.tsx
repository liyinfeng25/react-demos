import React from 'react'
import { useParams, useLocation, useHistory, } from 'react-router-dom'

function ProductListDetail () {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();


  console.log('location==>',location);
  console.log('history==>',history);

  
  console.log(params);
  
  return (
    <div>
      detail
    </div>
  )
} 

export default ProductListDetail;