import React from 'react';

export default [
  {
    path: '/',
    component: React.lazy(() => import('./pages/shop'))
  },
  {
    path: '/classAndHooks',
    name: 'class 组件引用 hooks',
    component: React.lazy(() => import('./pages/react-hooks/classAndHooks/index'))
  },
  {
    path: '/falls-flow-pc',
    name: '多栏瀑布流布局',
    component: React.lazy(() => import('./pages/fallsFlow/pc'))
  },
  {
    path: '/falls-flow-h5',
    name: '两列瀑布流布局',
    component: React.lazy(() => import('./pages/fallsFlow/h5'))
  },
  {
    path: '/cutdown',
    name: '倒计时',
    component: React.lazy(() => import('./pages/react-hooks/cutdown/index'))
  },
  {
    path: '/redux',
    name: 'redux状态管理',
    component: React.lazy(() => import('./pages/react-hooks/redux/index'))
  },
  {
    path: '/shop',
    name: '店铺管理页面',
    component: React.lazy(() => import('./pages/shop'))
  },
  {
    path: '/product-list',
    name: '商品列表页面',
    component: React.lazy(() => import('./pages/product-list'))
  },
  {
    path: '/product-list/:id',
    name: '商品详情页面',
    component: React.lazy(() => import('./pages/product-list/detail'))
  },
  {
    path: '/file-check',
    name: '上传文件格式判断',
    component: React.lazy(() => import('./pages/file/fileCheck'))
  },
  {
    path: '/file-upload',
    name: '文件上传',
    component: React.lazy(() => import('./pages/file/fileUpload'))
  },
  {
    path: '/drag',
    name: '',
    component: React.lazy(() => import('./pages/drag/index'))
  }
];