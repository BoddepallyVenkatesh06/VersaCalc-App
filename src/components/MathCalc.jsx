import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { AppContext } from '../context/AppContext';


// customised the button
const CircularButton = styled(Button)`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  padding: 0;
  min-width: auto;
  font-size: 1.5rem;
  background-color: #cbd5e1;
`;



const Calculator = () => {

  const { darkMode, setDarkMode } = useContext(AppContext);

  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleNumberClick = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleOperatorClick = (operator) => {
    setInput((prevInput) => prevInput + operator);
    handleCalculateClick();
  };

  const handleClearClick = () => {
    setInput('');
    setResult(0);
  };

  const handleCalculateClick = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
      console.log('This is new Error --> ', error)
    }
  };

  return (
    <div className={` flex flex-col items-center justify-center min-h-screen sm:mt-16 `} >

      <div className=" bg-gray-100 dark:bg-slate-700 rounded-3xl p-6 sm:mb-6 w-[300px] sm:w-[320px] shadow-2xl ">
        <input
          type="text"
          className="bg-white w-full font-semibold p-2 mb-2 border border-gray-300 rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <p className="text-3xl font-semibold min-h-[2.5rem] dark:text-slate-200">{result}</p>

        <div className='flex justify-between mt-5'>
          {/* All numbers */}
          <div className='grid grid-cols-3 gap-y-2 gap-x-2 w-full '>

            <CircularButton variant="text" onClick={handleNumberClick.bind(null, '1')} >
              1
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '2')}>
              2
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '3')}>
              3
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '4')}>
              4
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '5')}>
              5
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '6')}>
              6
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '7')}>
              7
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '8')} >
              8
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '9')}>
              9
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '')}>
              +/-
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '0')}>
              0
            </CircularButton>

            <CircularButton onClick={handleNumberClick.bind(null, '.')}>
              .
            </CircularButton>
          </div>



          {/* All Operators */}
          <div className='flex flex-col gap-4 ml-4'>
            <CircularButton variant="outlined"
              onClick={handleOperatorClick.bind(null, '+')} >
              +
            </CircularButton>

            <CircularButton variant="outlined"
              onClick={handleOperatorClick.bind(null, '-')}>
              -
            </CircularButton>

            <CircularButton variant="outlined"
              onClick={handleOperatorClick.bind(null, '*')}>
              *
            </CircularButton>

            <CircularButton variant="outlined"
              onClick={handleOperatorClick.bind(null, '/')}>
              /
            </CircularButton>
          </div>
        </div>





        <div className='flex w-full justify-between items-center mt-10'>
          <button
            className="bg-red-500 text-white font-bold py-2 px-4 rounded outline-none border-none"
            onClick={handleClearClick}
          >
            Clear
          </button>

          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2 outline-none border-none"
            onClick={handleCalculateClick}
          >
            Calculate
          </button>
        </div>

      </div>
    </div>
  )
};

export default Calculator;
