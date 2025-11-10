import React from 'react'
import Home from '@/pages/Home'
import About from '@/pages/About'

export type routeType = {
  path: string
  element: React.ReactElement<any>
}

export const routes: routeType[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]
