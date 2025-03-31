import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Events from './components/Events';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/events' element={<Events />} />
        <Route path='/sign-up' element={<SignIn/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App