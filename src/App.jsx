import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header';
import Row1 from './components/row1/Row1';
import Row2 from './components/row2/Row2';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="container py-4">
      <Header />
      <Row1 />
      <Row2 />
      <Footer />
    </div>
  )
}

export default App
