import React from 'react'

export default function Controls({ minMag, setMinMag, onRefresh, count }) {
  return (
    <div className="controls">
      <div className="status">Showing {count} events (filtered)</div>

      <div className="control">
        <label>Minimum magnitude: {minMag.toFixed(1)}</label>
        <input
          type="range"
          min="0"
          max="7"
          step="0.1"
          value={minMag}
          onChange={(e) => setMinMag(parseFloat(e.target.value))}
        />
      </div>

      <div className="control">
        <button onClick={onRefresh} style={{
          background: '#2563eb', color: 'white', border: 'none', padding:'8px 12px', borderRadius:8, cursor:'pointer'
        }}>
          Refresh
        </button>
      </div>

      <div className="footer">
        Tip: Click markers for details. Data source: USGS.
      </div>
    </div>
  )
}
