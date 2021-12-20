import React from 'react';

export default [
  {
    path: '/',
    component: React.lazy(() => import('./pages/shop'))
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