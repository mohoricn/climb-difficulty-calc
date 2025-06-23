import React from "react";
import { parseGPX } from "../utils/gpxParser";

export default function FileUploader({ onDataParsed }) {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const content = await file.text();
    const points = await parseGPX(content);
    onDataParsed(points);
  };

  return <input type="file" accept=".gpx" onChange={handleFile} />;
}