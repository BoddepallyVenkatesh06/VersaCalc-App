import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './components/Home'
import MathCalc from './components/MathCalc'
import Navbar from './components/Navbar';
import StopWatch from './components/StopWatch';
import AgeCalc from './components/AgeCalc';
// import Calendar from './components/calendar/Calendar';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const { darkMode, setDarkMode, showHomePage, setShowHomePage } = useContext(AppContext);

  // used svaed darkMode value and apply it
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode))
  }, [setDarkMode])


  // saving darkMOde value
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

  }, [darkMode])



  // customizing the toast
  const isMobile = window.innerWidth <= 767;
  const toastContainerStyle = {
    width: isMobile ? '200px' : '300px',
    top: isMobile ? '100px' : 'auto',
    bottom: isMobile ? 'auto' : '10px',
    left: isMobile ? '10px' : 'auto',
    right: isMobile ? 'auto' : '30px',
  };


  const location = useLocation();
  
  return (
    <div className={`${darkMode ? 'dark gradient-dark' : ''} w-screen h-screen gradient-bg overflow-x-hidden `}>
      <Navbar onLinkClick={() => setShowHomePage(false)} />
      {showHomePage && location.pathname === '/' && <Home />}

      <Routes >
        <Route path='/home' element={<Home />} />
        <Route path='/math-calculator' element={<MathCalc />} />
        <Route path='/age-calculator' element={<AgeCalc />} />
        {/* <Route path='/calendar' element={<Calendar />} /> */}
        <Route path='/stopwatch' element={<StopWatch />} />
        <Route path='*'  element={<Home />} />

      </Routes>



      <ToastContainer
        position={isMobile ? 'top-right' : 'top-right'}
        style={toastContainerStyle}
      />
    </div>
  );
}

export default App;
