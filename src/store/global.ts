const defaultData = {
  userInfo: {
    name: '',
    email: '',
    misId: ''
  }
}

export default (state = defaultData, action: any) => {
  switch (action.type) {
    case 'UPDATE_USERINFO': 
      return {
        ...state,
        userInfo: {
          ...action.info
        }
      }
    default:
      return state
  }
}


export const updateUserinfo = (info: any) => ({
  type: 'UPDATE_USERINFO',
  info
})