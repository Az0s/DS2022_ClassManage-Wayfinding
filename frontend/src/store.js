/*
 * @Date: 2022-04-10 19:05:17
 * @LastEditors: Azus
 * @LastEditTime: 2022-06-14 01:28:35
 * @FilePath: /DS/frontend/src/store.js
 */
import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  isLogged: false,
  username: "0",
  password: '0',
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
