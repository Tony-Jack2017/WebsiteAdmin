import React from 'react'
import { Routes, Route } from 'react-router'
import { RouteProps } from '@/router'
import RouteSwitchingEffect from '@/components/RouteSwitchingEffect'

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
          return !route.routes
            ? <Route key={index} path={route.path} element={RouteSwitchingEffect(route.component)}/>
            : <Route key={index} path={route.path} element={RouteSwitchingEffect(route.component)}>
                <RouteView routes={route.routes} />
              </Route>
        })
      }
    </Routes>
  )
}

export default RouteView
