import React from 'react'

export default function Legend() {
  return (
    <div className="legend" style={{position:'absolute', right:12, bottom:12, zIndex: 400}}>
      <div style={{fontWeight:700, marginBottom:6}}>Legend</div>
      <div className="row"><div className="swatch" style={{background:'#2dd4bf'}}></div><div>Depth &lt; 10 km</div></div>
      <div className="row"><div className="swatch" style={{background:'#60a5fa'}}></div><div>10 - 50 km</div></div>
      <div className="row"><div className="swatch" style={{background:'#f59e0b'}}></div><div>50 - 100 km</div></div>
      <div className="row"><div className="swatch" style={{background:'#ef4444'}}></div><div>&gt;= 100 km</div></div>
    </div>
  )
}
