// import { timeClockClasses } from '@mui/x-date-pickers';
import React, { useState, useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';

const StopWatch = () => {
  const { darkMode, setDarkMode } = useContext(AppContext)

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef()

  // Start function
  const handleStart = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10);

      setIsRunning(true);
    }
  }

  // stop function
  const handleStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  }

  // reset function
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }

  const formatTime = (time) => {
    const milliseconds = Math.floor((time % 1000) / 10)
      .toString()
      .padStart('2', '0');

    const seconds = Math.floor((time / 1000) % 60)
      .toString()
      .padStart('2', '0');

    const minutes = Math.floor((seconds / 60) % 60)
      .toString()
      .padStart('2', '0');

    return `${minutes}:${seconds}:${milliseconds}`
  }


  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='flex flex-col shadow-xl p-6 rounded-3xl w-[300px]
        dark:text-slate-200 bg-gray-100 dark:bg-slate-700  '>
        <p className='text-6xl font-bold text-center '>{formatTime(time)}</p>

        <div className='flex  items-center justify-between  mt-7'>
          {
            !isRunning ?
              (<button onClick={handleStart}
                className='bg-green-500 px-6 py-2 rounded-lg font-semibold'>
                Start
              </button>)
              :
              (<button onClick={handleStop}
                className='bg-red-500 px-6 py-2 rounded-lg font-semibold'>
                Stop
              </button>)
          }

          <button onClick={handleReset}
            className='bg-gray-400 dark:bg-gray-500 px-6 py-2 rounded-lg font-semibold'>
            Reset
          </button>
        </div>

      </div>
    </div>
  )
}

export default StopWatch;