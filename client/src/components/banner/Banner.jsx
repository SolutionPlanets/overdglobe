import React from 'react'
import "./banner.scss"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
//import marker from "../../assets/marker-40.png";

// Optional custom marker icon
const customIcon = new L.Icon({
  iconUrl: require("../../assets/marker-40.png"), //or link to an online image
  iconSize: [40, 40],
  iconAnchor: [12, 41],
});

const locations = [
  { lat: 29.7604, lng: -95.3698, name: "Houston" },
  { lat: 19.0760, lng: 72.8777, name: "Mumbai" },
  { lat: 48.8566, lng: 2.3522, name: "Paris" },
  { lat: 40.7128, lng: -74.006, name: "New York" },
  { lat: 35.6895, lng: 139.6917, name: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, name: "Sydney" },
];

const Banner = () => {
  return (
    <div className="banner">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      
        />
        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={[loc.lat, loc.lng]}
            icon={customIcon}
          >
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Banner;
