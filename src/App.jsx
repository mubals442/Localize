import React, { useEffect, useState } from "react";
import MapBox from "./Components/MapBox";
import CounterOfPins from "./Components/CounterOfPins";

function App() {
  useEffect(() => {
    document.title = "طلعني";
  });

  const [markersInsideCircle, setMarkersInsideCircle] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#F7EED3] font-serif">
      <h1 className="mb-6 text-[38px]">Map</h1>
          <CounterOfPins markersInsideCircle={markersInsideCircle} />
          <MapBox setMarkersInsideCircle={setMarkersInsideCircle}/>
    </div>
  );
}

export default App;
