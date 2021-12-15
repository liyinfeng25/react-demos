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
    code: '222',
    parentCode: 'root',
    title: 'demo',
    isLeaf: false,
    icon: 'laptop',
    link: '',
    children: [
      {
        code: '2220',
        parentCode: '222',
        title: '菜单2-1',
        isLeaf: true,
        icon: '',
        link: '/product-list1'
      },
      {
        code: '2221',
        parentCode: '222',
        title: '菜单2-2',
        isLeaf: false,
        icon: '',
        link: '/shop',
        children: [
          {
            code: '22210',
            parentCode: '2221',
            title: '菜单2-2-1',
            isLeaf: true,
            icon: '',
            link: '/product-list'
          },
          {
            code: '22211',
            parentCode: '2221',
            title: '菜单2-2-2',
            isLeaf: true,
            icon: '',
            link: ''
          },
        ]
      },
    ]
  }
];