import React from "react";

function CounterOfPins({ markersInsideCircle }) {
  return (
    <div className="border-0 shadow-md rounded-lg w-[70%] md:w-[25%] h-[30%] mb-10 flex flex-col justify-evenly items-center bg-[#CCD5AE]">
      <h1 className="text-[18px] w-[80%] text-center">
        The number of pins in this area that request
      </h1>
      <div className="border-0 bg-[#E7F0DC] shadow-lg rounded-md w-[30%] md:w-[25%] h-[30%] flex justify-center items-center text-[55px]">
        {markersInsideCircle}
      </div>
    </div>
  );
}

export default CounterOfPins;

// import React, { useState } from "react";
// import positionsObj from "./positionsObj.json";

// function CounterOfPins() {
//   const [positionsPins, setPositionsPins] = useState([...positionsObj]);
//   const [counter, setCounter] = useState(positionsPins.length);

//   // console.log(JSON.parse([...positionsObj]))

//   const [n, setN] = useState(localStorage.getItem("number"));

//   return (
//     <div className="border-0 shadow-md rounded-lg w-[70%] md:w-[25%] h-[30%] mb-10 flex flex-col justify-evenly items-center  bg-[#CCD5AE]">
//       <h1 className="text-[18px] w-[80%] text-center">
//         The number of pins in this aerea that request
//       </h1>
//       <div className="border-0 bg-[#E7F0DC] shadow-lg rounded-md w-[30%] md:w-[25%] h-[30%] flex justify-center items-center text-[55px]">
//         {n}
//       </div>
//     </div>
//   );
// }

// export default CounterOfPins;