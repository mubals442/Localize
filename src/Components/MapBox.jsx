import React, { useRef, useState } from "react";
import { TileLayer, MapContainer, Popup, Marker, Circle } from "react-leaflet";
import positionsObj from "./positionsObj.json";
import mapData from "./MapData";
import "leaflet/dist/leaflet.css";

function MapBox() {
  const [center, setCenter] = useState([51.505, -0.09]);
  const [positionsPins, setPositionsPins] = useState([...positionsObj]);
  const [zoom, setZoom] = useState(13);
  const [val, setVal] = useState(2);

  const redOptions = { color: "red" };
  const mapRef = useRef();

  const change = (e) => {
    if (e.target.value >= 0) {
      setVal(e.target.value);
    } else {
      alert("plase enter positive number");
    }
  };

  return (
    <div className="border-2 border-gray-400 w-[80%] md:w-[50%] h-[50%] rounded-2xl shadow-2xl bg-white mb-10">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={scroll}
        className="w-[100%] h-[100%] rounded-2xl"
      >
        <TileLayer
          url={mapData.msptiler.url}
          attribution={mapData.msptiler.attribution}
        />
        <Circle
          ref={mapRef}
          center={center}
          pathOptions={redOptions}
          radius={val * 1000}
        >
          {positionsPins.map((el, index) => (
            <Marker key={index} position={el.position}>
              <Popup>{el.title}</Popup>
            </Marker>
          ))}
        </Circle>
      </MapContainer>

      <div className="flex items-center md:block">
        <label htmlFor="" className="w-[60%]">
          Enter the size of ridus
        </label>
        <input
          type="number"
          className="mt-2 ml-10 w-[40%]"
          onChange={change}
          placeholder="Plaese enter a number"
          value={val}
        />
      </div>
    </div>
  );
}

export default MapBox;
