import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' exact render={() => <Redirect to='/browse' />} />
      <Route path='/browse' component={Home} />
      <Route path='/search' component={Search} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default AppRouter
