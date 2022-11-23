import React from 'react'
import { BrowserRouter, Redirect, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' exact render={() => <Navigate to='/browse' />} />
      <Route path='/browse' component={Home} />
      <Route path='/search' component={Search} />
      <Route component={NotFound} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default AppRouter
