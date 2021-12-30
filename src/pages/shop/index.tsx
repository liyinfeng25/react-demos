import React from 'react';
// import { connect } from 'react-redux'


function Shop (props: any) {
  console.log('===>', props)
  return (
    <div>
      我是店铺管理页面
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
  }
}

export default Shop;
// export default connect((state: any) => {
//   console.log('===>', state)
//   return {
//     ...state
//   }
// })(Shop);