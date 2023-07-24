import axios from 'axios';

const API_ROOT = 'http://router.project-osrm.org/route/v1/driving/';

// Function to generate OSRM API URL
function generateOSRMApiUrl(coordinates) {
    // Join coordinates into OSRM format
    const coordinatesString = coordinates.map(coord => coord.join(',')).join(';');
    return `${API_ROOT}${coordinatesString}?overview=full&geometries=geojson`;
}

export async function getRouteFromAPI(coordinates) {
    const url = generateOSRMApiUrl(coordinates);
    const response = await axios.get(url);
    if (response.data.code !== 'Ok') {
        throw new Error('Failed to get route from OSRM');
    }
    // Return the first route's geometry as the result
    return response.data.routes[0].geometry;
}
