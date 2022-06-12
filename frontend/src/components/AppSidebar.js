/*
 * @Date: 2022-04-10 19:05:17
 * @LastEditors: Azus
 * @LastEditTime: 2022-06-11 21:16:40
 * @FilePath: /coreui-free-react-admin-template/src/components/AppSidebar.js
 */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CImage, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import logo from "./../assets/brand/logoHorizontal_tight.jpg";


const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
      <CSidebar
          position="fixed"
          unfoldable={unfoldable}
          visible={sidebarShow}
          onVisibleChange={(visible) => {
              dispatch({ type: "set", sidebarShow: visible });
          }}
      >
          <CSidebarBrand className="d-none d-md-flex" to="/">
              <CImage src={logo} width={150} />
              <CIcon
                  className="sidebar-brand-narrow"
                  icon={sygnet}
                  height={35}
              />
          </CSidebarBrand>
          <CSidebarNav>
              <SimpleBar>
                  <AppSidebarNav items={navigation} />
              </SimpleBar>
          </CSidebarNav>
          <CSidebarToggler
              className="d-none d-lg-flex"
              onClick={() =>
                  dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
              }
          />
      </CSidebar>
  );
}

export default React.memo(AppSidebar)
