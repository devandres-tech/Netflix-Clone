import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/browse' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRouter
