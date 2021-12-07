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
  }
];