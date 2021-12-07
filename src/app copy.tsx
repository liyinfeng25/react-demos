import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';

import ProductList from './pages/product-list'

import Shop from './pages/shop'
import Tick from './components/Tick'
import MapList from './components/map-list'
import File from './components/File'
import Calculator from './components/state'

import DragPage from './components/drag/index'
import FileUpload from './components/fileupload/index'

interface IPros {
  name: string,
  age: number
}

function App () {
  const { name, age, wrong } = { name: '', age: '', wrong: '' }
  return (
    <Router>
      <div className="main">
        APP = { name } = { age }
        <span>{ wrong }</span>
        <hr/>
        <nav>
           <ul>
             <li><Link to='/'>首页</Link></li>
             <li><Link to='/product-list'>商品列表</Link></li>
             <li><Link to='/shop'>店铺管理</Link></li>
           </ul>
        </nav>
        <Switch>
          <Route path="/product-list">
            <ProductList/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
        </Switch>

        <br/><br/><br/>

        <DragPage></DragPage>

        <br/><br/>

        <br/><br/><br/>

        <FileUpload></FileUpload>

        <br/><br/>

        <Tick></Tick>
        <Tick></Tick>
        <MapList>
          <div>title1</div>
          <div>title2</div>
        </MapList>
        <hr/>
        <File></File>
        <hr/>
        <Calculator></Calculator>

      </div>
    </Router>
  )
}

export default App