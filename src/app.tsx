import React, { Suspense } from 'react'
import { withRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import routers from './routers';
import 'antd/dist/antd.css';
import './index.less';

// 菜单渲染数据
import { menuList } from './mock/menu';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const renderMenuItem = (item: any) => {
    // 菜单结构参考：https://codesandbox.io/s/gfsvw?file=/index.js:487-494
    if (item.isLeaf) {
      return (
        <Menu.Item key={item.code}>
          <Link to={item.link}>
            {item.title}
          </Link>
        </Menu.Item>
      )
    }
    return (
      <Menu.SubMenu key={item.code} title={(
        <span>
          { item.icon && <Icon type={item.icon} /> }
          <span>{item.title}</span>
        </span>
      )}>
        { item.children.length && item.children.map(renderMenuItem) }
      </Menu.SubMenu>
    )
  }

  return (
    <Layout>
      <Sider className="layout-sider">
        <div className="logo"></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1110']}
          defaultOpenKeys={['111']}
        >
          {menuList.map(renderMenuItem)}
        </Menu>
      </Sider>

      {/* 
        Suspense 文档：https://zh-hans.reactjs.org/docs/react-api.html#reactsuspense
       */}
      <Suspense fallback={<div></div>}>
        <Layout style={{ marginLeft: 200 }}>
          <Header className="content-header" >header</Header>
          <Content className="content-main">
            <div className="main-box" style={{ height: window.screen.height-270 }}>
              <Switch>
                {
                  routers.map((item: any) => (
                    <Route path={item.path} key={item.path} component={item.component} exact />
                  ))
                }
                <Redirect from='/' to='/product-list'></Redirect>
              </Switch>  
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>底部说明</Footer>
        </Layout>
      </Suspense>
    </Layout>
  );
}

export default withRouter(App);
