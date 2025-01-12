import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}



const Home = () => {

  const { darkMode } = useContext(AppContext);
  return (
    <div className={`flex justify-center items-center h-full w-full`}>

      <Tilt options={defaultOptions} className='flex flex-col justify-center items-center max-w-[85%] sm:max-w-[30%]'>

        <div className='gradient-home flex flex-col justify-center items-center  py-9 px-7 
        border-2 border-slate-900 dark:border-slate-600 border-opacity-10  '>
          <h1 className='font-extrabold text-3xl gradient-text text-center'>
            Your All-in-One Calculator and Utility App
          </h1>

          <p className='font-medium mt-5 text-center dark:text-slate-200 '>
            VarsaCalc is a versatile website offering a collection of useful apps,
            including a Math, Age Calculator, Stopwatch, and Calendar.
            With its intuitive interface and powerful features, VarsaCalc simplifies complex calculations,
            helps you track your age and time activities,
            and keeps you organized with a handy calendar.
          </p>
        </div>
      </Tilt>

    </div>
  )
}

export default Home