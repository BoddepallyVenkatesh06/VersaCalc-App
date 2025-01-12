import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

import { toast } from 'react-toastify';


const AgeCalc = () => {

  const { darkMode } = useContext(AppContext);

  const [birthDate, setBirthDate] = useState('');
  const [resultAge, setResultAge] = useState(null);



  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    if (isNaN(birthDateObj)) {
      setResultAge(null);

      toast.error('Enter Valid Date', {
        autoClose: 3000,
      });
    }

    else {
      const diff = today - birthDateObj;
      const ageDate = new Date(diff);

      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setResultAge(calculatedAge)
    }
  }




  return (
    <div className={`${darkMode ? 'dark' : ''} flex flex-col items-center justify-center min-h-screen sm:mt-16 `} >
      <div className=" dark:text-slate-200 bg-gray-100 dark:bg-slate-700 rounded-3xl 
        p-6 mb-6 w-[300px] sm:w-[390px] shadow-2xl">

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-around">
          <label
            className='cursor-pointer font-semibold text-2xl dark:'
            htmlFor="date"
          >
            Birth date :
          </label>


          <input
            id='date'
            type='date'
            value={birthDate}
            className='cursor-pointer font-semibold text-xl p-1 bg-gray-100 dark:bg-slate-700 border
             border-gray-300 dark:border-gray-700 rounded focus:outline-none 
             focus:ring-2 focus:ring-blue-500'
            onChange={(e) => setBirthDate(e.target.value)}
          />

        </div>



        <div className='flex w-full justify-between items-center mt-6'>
          <button
            onClick={() => {
              setBirthDate('');
              setResultAge(null);
              toast.success('Reset successful', {
                autoClose: 3000,
              });
            }}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded outline-none border-none"

          >
            Reset
          </button>

          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2 outline-none border-none"
            onClick={calculateAge}
          >
            Calculate
          </button>
        </div>


        {/* <div className="mt-9">
          {
            resultAge && (
              <p className="text-xl font-semibold ">
                Age : {resultAge} Years
              </p>
            )
          }
        </div> */}

        <div>
          <p className={`text-xl font-semibold mt-9 ${resultAge !== null ? 'opacity-100' : 'opacity-40'}`}>
            Age: {resultAge} Years
          </p>
        </div>

      </div>
    </div >
  )
}

export default AgeCalc;