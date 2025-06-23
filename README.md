# Climb Difficulty Calculator

A simple web app that lets you upload a GPX file and calculates the difficulty of climbs based on 100 m incline segments.

## 💡 Climb Detection Criteria

- Must be at least 500 m long
- Must have an average incline of at least 2%
- Scoring: Every 100 m segment gets a score equal to its average incline (in %)

## 🛠 How to Run Locally

```bash
npm install
npm run dev
```

## 📂 Upload Format

Upload a valid `.gpx` file with elevation and GPS points.

## 🧱 Built With

- React
- Leaflet (Map placeholder)
- xml2js (GPX parsing)