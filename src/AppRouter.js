import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
import Navbar from './components/Navbar'

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' exact render={() => <Redirect to='/browse' />} />
      <Route path='/browse' component={Home} />
      <Route path='/search' component={Search} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
