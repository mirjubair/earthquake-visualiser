# Earthquake Visualizer

Live map of recent earthquakes using USGS last-24-hour GeoJSON feed.

## Run locally
1. `npm install`
2. `npm run dev` (open http://localhost:3000)

## Deploy
- Works on CodeSandbox/StackBlitz (import the repo) or static hosts (Netlify / Vercel).
- Build: `npm run build`

## Notes
- Data source: USGS GeoJSON feed `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`.
- Map uses react-leaflet + OpenStreetMap tiles.
