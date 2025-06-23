import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import ClimbList from "./components/ClimbList";
import MapViewer from "./components/MapViewer";
import ExportGPX from "./components/ExportGPX";
import { detectClimbs } from "./utils/climbDetector";

function App() {
  const [climbs, setClimbs] = useState([]);

  const handleData = (points) => {
    const detected = detectClimbs(points);
    setClimbs(detected);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h1>Climb Difficulty Calculator</h1>
      <FileUploader onDataParsed={handleData} />
      <ExportGPX climbs={climbs} />
      <ClimbList climbs={climbs} />
      <MapViewer climbs={climbs} />
    </div>
  );
}

export default App;