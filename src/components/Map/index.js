import React from 'react';
import {useSelector} from 'react-redux';
import {MapContainer as LeafletMap, TileLayer, Marker, Polyline} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const selectedRoute = useSelector(state => state.route.selectedRoute);

    const {name, waypoints} = selectedRoute;

    const routeMarkers = waypoints.map((point, idx) => (
        <Marker key={`${name}_marker_${idx}`} position={point.location}/>
    ));

    return (
        <LeafletMap
            center={waypoints[0].location}
            zoom={13}
            style={{height: "100%", width: "100%"}}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {routeMarkers}
            {selectedRoute.polyline &&
                <Polyline pathOptions={{color: 'blue'}} positions={selectedRoute.polyline.coordinates}/>}
        </LeafletMap>
    );
};

export default MapComponent;
