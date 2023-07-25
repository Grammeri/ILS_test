import axios from 'axios';

const API_ROOT = 'http://router.project-osrm.org/route/v1/driving/';

export async function getRouteFromAPI(coordinates) {
    const formattedCoordinates = coordinates.map(c => c.join(',')).join(';');
    const url = `${API_ROOT}${formattedCoordinates}?overview=full&geometries=geojson`;
 /*   console.log(formattedCoordinates)
    console.log('Requesting OSRM with URL:', url);  // Debug log*/

    const response = await axios.get(url);

   /* console.log('OSRM response:', response.data);  // Debug log*/

    if (response.data.code !== 'Ok') {
        throw new Error('Failed to get route from OSRM');
    }

    // Return the first route's full geometry as the result
    return response.data.routes[0].geometry;
}
