import React, { useState } from 'react'
import positionsObj from './positionsObj.json'

function CounterOfPins() {

    
    const [positionsPins, setPositionsPins] = useState([...positionsObj]);
    const [counter , setCounter] = useState(positionsPins.length);

  return (
    <div className='border-0 shadow-md rounded-lg w-[70%] md:w-[25%] h-[30%] mb-10 flex flex-col justify-evenly items-center  bg-[#CCD5AE]'>
            <h1 className='text-[20px] w-[80%] text-center'>The number of pins in this aerea that request</h1>
                <div className='border-0 bg-[#E7F0DC] shadow-lg rounded-md w-[30%] md:w-[25%] h-[30%] flex justify-center items-center text-[55px]'>
                    {counter}
                </div>
    </div>
  )
}

export default CounterOfPins;