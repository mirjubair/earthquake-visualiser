import React, { useEffect, useState, useCallback } from 'react'
import MapView from './components/MapView'
import Controls from './components/Controls'
import Legend from './components/Legend'
import { fetchAllDay } from './api'
import { parseFeature } from './utils'

export default function App() {
  const [rawGeo, setRawGeo] = useState(null)
  const [events, setEvents] = useState([])
  const [minMag, setMinMag] = useState(2.5)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const json = await fetchAllDay()
      setRawGeo(json)
      const parsed = json.features.map(parseFeature)
      setEvents(parsed)
    } catch (err) {
      console.error(err)
      setError(err.message || 'Error fetching')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const filtered = events.filter(e => (e.mag ?? 0) >= minMag)

  return (
    <div className="app">
      <div className="panel">
        <h2 style={{marginTop:0}}>Earthquake Visualizer</h2>
        <div style={{color:'#9aa4b2', marginBottom:12}}>Recent earthquakes (last 24h) — interactive map & filters</div>

        <div className="controls">
          { loading && <div className="status">Loading data…</div> }
          { error && <div className="status" style={{background:'rgba(255,0,0,0.06)'}}>Error: {error}</div> }

          <Controls minMag={minMag} setMinMag={setMinMag} onRefresh={load} count={filtered.length} />

          <div style={{marginTop:12}}>
            <strong>Top {Math.min(10, filtered.length)} events</strong>
            <ol style={{paddingLeft:18}}>
              {filtered.slice(0,10).map(ev => (
                <li key={ev.id} style={{marginBottom:6}}>
                  <div style={{fontSize:13}}>{ev.place}</div>
                  <div style={{fontSize:12, color:'#9aa4b2'}}>M {ev.mag} • {new Date(ev.time).toLocaleString()}</div>
                </li>
              ))}
              {filtered.length === 0 && <div style={{color:'#9aa4b2'}}>No events match the filter.</div>}
            </ol>
          </div>
        </div>
      </div>

      <div className="mapCard">
        <MapView events={filtered} />
        <Legend />
      </div>
    </div>
  )
}
