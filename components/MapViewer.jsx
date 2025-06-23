import React from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapViewer({ climbs }) {
  if (climbs.length === 0) return null;

  const center = [
    (climbs[0].start.lat + climbs[0].end.lat) / 2,
    (climbs[0].start.lon + climbs[0].end.lon) / 2,
  ];

  return (
    <MapContainer center={center} zoom={13} style={{ height: "400px", marginTop: "1rem" }}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {climbs.map((climb, index) => (
        <Polyline
          key={index}
          positions={[
            [climb.start.lat, climb.start.lon],
            [climb.end.lat, climb.end.lon],
          ]}
          color="red"
        />
      ))}
    </MapContainer>
  );
}