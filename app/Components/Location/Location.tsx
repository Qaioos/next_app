"use client"
 
import { Marker } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer"

 
import { TileLayer } from "react-leaflet/TileLayer"


const Location =  ({ coordinatesData }: { coordinatesData: { latitude: number; longitude: number } | undefined }) => {
        const {latitude,longitude} = coordinatesData || { latitude: 51.505, longitude: 41.09 };
  return (
    <div className="h-40 w-full mt-2 rounded-md overflow-hidden">
      <MapContainer center={[latitude, longitude]} zoom={3} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </div>
    
  )
}

export default Location
