import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Main from './pages/common/Main'
import Dashboard from '@/pages/normal/Dashboard'
import Test from './pages/normal/Test'
import Login from '@/pages/common/Login/Login'
import Error from '@/pages/common/Error/Error'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="test" element={<Test />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
