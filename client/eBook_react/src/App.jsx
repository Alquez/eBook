// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Application from './components/application/Application'

function App() {
//   function test(){
//  document.getElementById('animation')
//   }
  return (
    <>
    <div className="container">
      <Header/>
      <Application/>
      <Footer/>
    </div>
    </>
  )
}

export default App
