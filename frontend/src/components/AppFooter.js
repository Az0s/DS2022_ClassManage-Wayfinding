/*
 * @Date: 2022-04-10 19:05:17
 * @LastEditors: Azus
 * @LastEditTime: 2022-06-09 21:57:16
 * @FilePath: /coreui-free-react-admin-template/src/components/AppFooter.js
 */
import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a
          href="https://github.com/Az0s/DS2022_ClassManage-Wayfinding"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUPT
        </a>
        <span className="ms-1">&copy; 2022 2020211554-6.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          React &amp; CoreUI
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
