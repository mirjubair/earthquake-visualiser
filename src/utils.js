// small helpers

export function parseFeature(feature) {
  // feature: GeoJSON Feature from USGS
  const { id, properties, geometry } = feature
  const { mag, place, time, url } = properties
  const [lon, lat, depth] = geometry.coordinates
  return {
    id,
    mag,
    place,
    time,
    url,
    coords: [lat, lon],
    depth
  }
}

export function magToRadius(mag) {
  if (!mag || mag <= 0) return 4000
  // scale: increase difference more for bigger mags
  return Math.pow(mag, 2.4) * 800
}

// color by depth (in km)
export function depthToColor(depth) {
  if (depth < 10) return '#2dd4bf' // shallow — teal
  if (depth < 50) return '#60a5fa' // blue
  if (depth < 100) return '#f59e0b' // orange
  return '#ef4444' // deep — red
}

export function formatTime(ts) {
  const d = new Date(ts)
  return d.toLocaleString()
}
