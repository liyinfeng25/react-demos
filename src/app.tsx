import React, { Suspense } from 'react'
import { withRouter, Link, Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import { flattenDeep, lowerFirst, memoize } from 'lodash';

import routers from './routers';
import 'antd/dist/antd.css';
import './index.less';

// 菜单渲染数据
import { menuList } from './mock/menu';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [defaultSelectedKeys, setDefaultSelectedKeys] = React.useState<any>();
  const [defaultOpenKeys, setDefaultOpenKeys] = React.useState<any>();
  const location = useLocation()

  // 渲染菜单
  const renderMenuItem = (item: any) => {
    console.log('====>', item);
    
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
        { item?.children?.length && item?.children.map(renderMenuItem) }
      </Menu.SubMenu>
    )
  }

  const computeFlattenMenuList = () => memoize(
    (menuList: any): any => {
      const convertMenuToList = (menu: any): any[] => [
        menu,
        ...menu.children.map(convertMenuToList),
      ];
      return flattenDeep(menuList.map(convertMenuToList));
    },
  );

  const converMenuList = (item: any) => {
    const flattenDeepMenuList: any = JSON.parse(JSON.stringify(menuList));
    
    const flatArr = (arr: any) => {
      let newList: any = [];
      arr.forEach((item: any) => {
        if (item?.children?.length) {
          item = [].concat(item, ...flatArr(item.children))
        }
        newList = newList.concat(item)
      })
      return newList;
    }
    return flatArr(flattenDeepMenuList);
  }

  const matchDefaultOpenKeys = () => {
    const newMenuList: any = converMenuList(menuList);
    const defaultOpenKeys: string[] = [];
    console.log(newMenuList,menuList);
    
    // 初始选中菜单
    let defaultSelectedKeys = newMenuList.filter((item: any) => 
      item.link && window.location.pathname.indexOf(item.link) > -1
    )[0]
    // 初始展开 submenu 数组
    if (defaultSelectedKeys) {
      console.log(defaultSelectedKeys);
      
      let cursorNode: any = defaultSelectedKeys;
      do {
        defaultOpenKeys.unshift(cursorNode.code);
        const parentNode = newMenuList.find((item: any) => item.code === cursorNode.parentCode);
        cursorNode = parentNode;
      } while (cursorNode);
    }
    console.log(defaultOpenKeys);
    
    setDefaultSelectedKeys(defaultSelectedKeys);
    setDefaultOpenKeys(defaultOpenKeys);
  }

  React.useEffect(()=> {
    matchDefaultOpenKeys();
  }, []);

  return (
    <Layout>
      <Sider className="layout-sider">
        <div className="logo"></div>
        {
          <Menu
            theme="dark"
            mode="inline"
            // defaultSelectedKeys={['22210']}
            // defaultOpenKeys={['222','2221']}
            defaultSelectedKeys={[defaultSelectedKeys?.code]}
            defaultOpenKeys={defaultOpenKeys}
          >
            {menuList.map(renderMenuItem)}
          </Menu>
        }
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
