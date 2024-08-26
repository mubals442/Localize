import React, { useRef, useState } from "react";
import { TileLayer, MapContainer, Popup, Marker } from "react-leaflet";
import positionsObj from './positionsObj.json'
import mapData from "./MapData";
import "leaflet/dist/leaflet.css";
function MapBox() {

  const [center, setCenter] = useState([51.505, -0.09]);
  const [positionsPins, setPositionsPins] = useState([...positionsObj]);

  const ZOOM_LEVEL = 13;
  const mapRef = useRef();

  console.log(mapRef);

  return (
    <div className="border-0 w-[80%] md:w-[50%] h-[50%] rounded-2xl shadow-2xl bg-white">
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={false}
        className="w-[100%] h-[100%] rounded-2xl"
        ref={mapRef}
      >
        <TileLayer
          url={mapData.msptiler.url}
          attribution={mapData.msptiler.attribution}
        />
        {positionsPins.map((el, index) => (
          <Marker key={index} position={el.position}>
            <Popup>{el.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapBox;
