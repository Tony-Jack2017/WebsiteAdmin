import React from 'react'
import './App.css'
import RouteView from '@/components/RouteView'
import routes from '@/router/index'

function App () {
  return (
    <div className="App">
       <RouteView routes={routes} />
    </div>
  )
}

export default App
