import React from 'react'
import classNames from 'classnames'

export interface LayoutProps {
  layout?: string
}

const Layout: React.ForwardRefRenderFunction<unknown, LayoutProps> = function (props, ref) {
  const {
    layout = 'default',
    children
  } = props

  const classes = classNames({
    'layout-flex': layout === 'default'
  })

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Layout
