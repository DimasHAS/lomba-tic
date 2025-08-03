'use client';

import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

// Component to automatically update map view when position changes
const ChangeView = ({ center }: { center: LatLngExpression }) => {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
}

const WeatherMap = ({ position }: { position: LatLngExpression }) => {
    return (
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
            <ChangeView center={position} />
        </MapContainer>
    );
};

export default WeatherMap;
