import React from "react";
import { useEffect, useState } from "react";
import SearchesContainer from "../components/SearchesContainer";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Searches = (props) => {
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/searches", {
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((searches) => {
        setSearches(searches);
      });
  }, []);

  return (
    <div>
      <h1>hello</h1>
      <SearchesContainer searches={searches} />

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Searches;
