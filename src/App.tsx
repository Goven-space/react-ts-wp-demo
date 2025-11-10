import React from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { routes, type routeType } from '@/router'

const App: React.FC = () => {
  return (
    <HashRouter>
      <div>
        <h1>导航</h1>
        <nav>
          <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
        </nav>
      </div>

      <Routes>
        {routes.map(
          (route: routeType, index: number): React.ReactElement<any, any> => (
            <Route key={index} path={route.path} element={route.element} />
          )
        )}
      </Routes>
    </HashRouter>
  )
}

export default App
