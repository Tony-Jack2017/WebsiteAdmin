import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

const RouteSwitchingEffect = (Component: any) => {
  const location = useLocation()
  useEffect(() => {
  }, [location])
  return (
    <Component />
  )
}

export default RouteSwitchingEffect
