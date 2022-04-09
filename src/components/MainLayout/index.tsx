import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.scss'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

const MainLayout = () => {
  return (
    <div className="apis-admin-main">
      <div className="apis-admin-left">
        <div className="apis-admin-sidebar">
          <Sidebar/>
        </div>
      </div>
      <div className="apis-admin-right">
        <div className="apis-admin-header">
          <Header/>
        </div>
        <div className="apis-admin-content">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
