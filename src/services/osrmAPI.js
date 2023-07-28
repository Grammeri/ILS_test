import axios from 'axios';

const API_ROOT = 'http://router.project-osrm.org/trip/v1/car/';

export const getRouteFromAPI = async coordinates => {
    const formattedCoordinates = coordinates.map(c => {
        return  [...c].reverse().join(',')
    }).join(';');
    const url = `${API_ROOT}${formattedCoordinates}?geometries=polyline`;

    const response = await axios.get(url);

    if (response.data.code !== 'Ok') {
        throw new Error('Failed to get route from OSRM');
    }

    return response.data.trips[0].geometry;
};
