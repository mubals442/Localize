import React, { useEffect } from "react";
import MapBox from "./Components/MapBox";
import CounterOfPins from "./Components/CounterOfPins";

function App() {
  useEffect(() => {
    document.title = "طلعني";
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#F7EED3] font-serif border-4 border-green-400">
      <h1 className="mb-6 text-[38px]">Map</h1>
          <CounterOfPins />
        <MapBox />
    </div>
  );
}

export default App;
