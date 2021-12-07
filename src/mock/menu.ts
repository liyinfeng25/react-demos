export const menuList = [
  {
    code: 111,
    title: '菜单1',
    isLeaf: false,
    icon: 'shop',
    link: '/shop',
    children: [
      {
        code: 1110,
        title: '菜单1-1',
        isLeaf: true,
        icon: '',
        link: '/shop'
      },
      {
        code: 1111,
        title: '菜单1-2',
        isLeaf: true,
        icon: '',
        link: '/shop'
      },
    ]
  },{
    code: 222,
    title: '菜单2',
    isLeaf: false,
    icon: 'laptop',
    link: '/',
    children: [
      {
        code: 2220,
        title: '菜单2-1',
        isLeaf: true,
        icon: '',
        link: '/product-list'
      },
      {
        code: 2221,
        title: '菜单2-2',
        isLeaf: false,
        icon: '',
        link: '/product-list',
        children: [
          {
            code: 22210,
            title: '菜单2-2-1',
            isLeaf: true,
            icon: '',
            link: ''
          },
          {
            code: 22211,
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