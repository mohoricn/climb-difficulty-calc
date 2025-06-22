import React from "react";

export default function ClimbList({ climbs }) {
  return (
    <div>
      <h2>Detected Climbs</h2>
      <ul>
        {climbs.map((climb, index) => (
          <li key={index}>
            Distance: {(climb.distance / 1000).toFixed(2)} km, Avg Incline:{" "}
            {climb.incline.toFixed(2)}%, Score: {climb.score}
          </li>
        ))}
      </ul>
    </div>
  );
}