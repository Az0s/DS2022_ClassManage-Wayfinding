/*
 * @Date: 2022-04-10 19:05:17
 * @LastEditors: Azus
 * @LastEditTime: 2022-06-12 12:35:18
 * @FilePath: /coreui-free-react-admin-template/src/store.js
 */
import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  isLogged: false,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
