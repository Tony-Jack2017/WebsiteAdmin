import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className="main">
      <div>This is Sidebar</div>
      <div>
        <div>This is Header</div>
        <Outlet />
      </div>
    </div>
  )
}

export default Main
