
import React from 'react'
import { Routes, Route } from 'react-router'
import { RouteProps } from '@/router'

export interface PageLayoutProps {
    routes: Array<RouteProps>
}

const RouteView: React.ForwardRefRenderFunction<unknown, PageLayoutProps> = (
  props,
  ref) => {
  const { routes } = props
  return (
      <Routes>
          {
              routes.map((route, index) => {
                return route.layout === 'default'
                  ? <Route key={index} path={route.path} element={<route.component /> } />
                  : <Route key={index} path={route.path} element={<route.component />} />
              })
          }
      </Routes>
  )
}

export default RouteView
