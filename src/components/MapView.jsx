import React from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { magToRadius, depthToColor, formatTime } from '../utils'

export default function MapView({ center=[20,0], zoom=2, events=[] }) {
  // events: [{id,mag,place,time,coords:[lat,lon],depth,url}]
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{height:'100%', width:'100%'}}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map(ev => {
        const pos = ev.coords
        const color = depthToColor(ev.depth)
        const radius = Math.max(2000, magToRadius(ev.mag))
        return (
          <CircleMarker
            key={ev.id}
            center={pos}
            radius={Math.max(6, (ev.mag || 0) * 4)}
            pathOptions={{ color, fillColor: color, fillOpacity: 0.7 }}
          >
            <Popup>
              <div style={{minWidth:200}}>
                <strong>{ev.place}</strong>
                <div>Magnitude: {ev.mag ?? '—'}</div>
                <div>Depth: {ev.depth ?? '—'} km</div>
                <div>Time: {formatTime(ev.time)}</div>
                <a href={ev.url} target="_blank" rel="noreferrer">More on USGS</a>
              </div>
            </Popup>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}
