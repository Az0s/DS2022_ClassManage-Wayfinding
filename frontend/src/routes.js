/*
 * @Date: 2022-04-10 19:05:17
 * @LastEditors: Azus
 * @LastEditTime: 2022-06-12 03:36:22
 * @FilePath: /coreui-free-react-admin-template/src/routes.js
 */
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
]

export default routes
