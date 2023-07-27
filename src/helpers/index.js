import Icon from "../../src/assets/marker-icon-2x.png"
import L from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';


export let myIcon = L.icon({
    iconUrl: Icon,  // замените на путь к вашему файлу иконки
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});


export const polylineOptions = {
    color: 'red',
    weight: 3,
    opacity: 0.5,
};

export function ChangeView({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
}

export function getCenter(coordinates) {
    if (!coordinates || !coordinates.length) {
        return [59.84, 30.35]; // Default center
    }

    let minLat = coordinates[0][0], maxLat = coordinates[0][0];
    let minLng = coordinates[0][1], maxLng = coordinates[0][1];

    for (let i = 1; i < coordinates.length; i++) {
        const [lat, lng] = coordinates[i];
        minLat = lat < minLat ? lat : minLat;
        maxLat = lat > maxLat ? lat : maxLat;
        minLng = lng < minLng ? lng : minLng;
        maxLng = lng > maxLng ? lng : maxLng;
    }

    return [(minLat + maxLat) / 2, (minLng + maxLng) / 2];
}
