export const menuList = [
  {
    code: '111',
    parentCode: 'root',
    title: '文件操作相关',
    isLeaf: false,
    icon: 'file',
    link: '',
    children: [
      {
        code: '1110',
        parentCode: '111',
        title: '上传文件格式判断',
        isLeaf: true,
        icon: '',
        link: '/file-check'
      },
      {
        code: '1111',
        parentCode: '111',
        title: '文件上传',
        isLeaf: true,
        icon: '',
        link: '/file-upload'
      },
    ]
  },
  {
    code: '333',
    parentCode: 'root',
    title: '前端拖拽',
    isLeaf: false,
    icon: 'drag',
    link: '',
    children: [
      {
        code: '3330',
        parentCode: '333',
        title: '文件拖拽',
        isLeaf: true,
        icon: '',
        link: '/drag'
      }
    ]
  },
  {
    code: '444',
    parentCode: 'root',
    title: 'react 小demo',
    isLeaf: false,
    icon: 'file',
    link: '',
    children: [
      {
        code: '4440',
        parentCode: '444',
        title: 'class 组件引用 hooks',
        isLeaf: true,
        icon: '',
        link: '/classAndHooks'
      },
      {
        code: '4441',
        parentCode: '444',
        title: '倒计时',
        isLeaf: true,
        icon: '',
        link: '/cutdown'
      },
      {
        code: '4442',
        parentCode: '444',
        title: 'redux状态管理',
        isLeaf: true,
        icon: '',
        link: '/redux'
      }
    ]
  },
  {
    code: '555',
    parentCode: 'root',
    title: '布局',
    isLeaf: false,
    icon: 'laptop',
    link: '',
    children: [
      {
        code: '5550',
        parentCode: '555',
        title: '多栏瀑布流布局',
        isLeaf: true,
        icon: '',
        link: '/falls-flow-pc'
      },
      {
        code: '5551',
        parentCode: '555',
        title: '两列瀑布流布局',
        isLeaf: true,
        icon: '',
        link: '/falls-flow-h5',
      },
    ]
  }
];