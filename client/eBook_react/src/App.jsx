// eslint-disable-next-line no-unused-vars
import React, { Profiler } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Profile from './components/profile/Profile'
// import About from './components/about/About'
// // import Authorization from './components/authorization/Authorization'
// // import Location from './animation/Location'
// // import Ribbon from './components/ribbon/Ribbon'
// import Application from './components/application/Application'
import { Route, Routes } from 'react-router-dom'
import Ribbon from './components/ribbon/Ribbon'
import Authorization from './components/authorization/Authorization'
import Application from './components/application/Application'


function App() {
  return (
    <>
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Authorization/>}  />
        <Route path='/ribbon' element={<Ribbon/>}  />
        <Route path='/application' element={<Application/>}  />
        <Route path='/profile' element={<Profile/>}  />
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
