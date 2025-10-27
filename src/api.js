// Centralized API functions

const USGS_ALL_DAY = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'

// fetch recent earthquakes (all day)
export async function fetchAllDay() {
  const res = await fetch(USGS_ALL_DAY)
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`)
  }
  const json = await res.json()
  return json // GeoJSON FeatureCollection
}
