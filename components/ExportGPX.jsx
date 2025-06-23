import React from "react";

export default function ExportGPX({ climbs }) {
  const exportGPX = () => {
    const gpxHeader = \`<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="ClimbDifficultyCalc" xmlns="http://www.topografix.com/GPX/1/1">
<trk><name>Climbs</name><trkseg>\`;
    const gpxFooter = "</trkseg></trk></gpx>";

    const trkpts = climbs
      .map(
        (climb) => \`
<trkpt lat="\${climb.start.lat}" lon="\${climb.start.lon}"><ele>\${climb.start.ele}</ele></trkpt>
<trkpt lat="\${climb.end.lat}" lon="\${climb.end.lon}"><ele>\${climb.end.ele}</ele></trkpt>\`
      )
      .join("");

    const gpx = gpxHeader + trkpts + gpxFooter;
    const blob = new Blob([gpx], { type: "application/gpx+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "climbs.gpx";
    link.click();
  };

  return (
    <button onClick={exportGPX} disabled={climbs.length === 0}>
      Export Climbs as GPX
    </button>
  );
}