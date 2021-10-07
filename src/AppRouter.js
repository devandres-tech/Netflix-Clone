import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
import Navbar from './components/Navbar'

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/search' component={Search} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
