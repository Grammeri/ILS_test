import polyline from '@mapbox/polyline';

// Настройки иконки маркера
export const iconOptions = {
    iconUrl: 'path-to-your-icon-image-file',  // замените на путь к вашему файлу иконки
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
};

// Настройки полилинии
export const polylineOptions = {
    color: 'red',
    weight: 3,
    opacity: 0.5,
};

// Функция для преобразования координат в строку, которую можно использовать в запросе к OSRM API
export const coordinatesToString = (coordinates) => {
    return coordinates.map(coordinate => coordinate.join(',')).join(';');
}

// Функция для преобразования строки ответа OSRM API в массив координат
export const decodePolyline = (polylineData) => {
    let decodedData = polyline.decode(polylineData);

    // Инвертирование координат, так как Leaflet использует порядок (широта, долгота)
    return decodedData.map(item => item.reverse());
}

// Функция для определения области видимости карты, чтобы отобразить все маркеры
export const getBounds = (coordinates) => {
    let latitudes = coordinates.map(coordinate => coordinate[0]);
    let longitudes = coordinates.map(coordinate => coordinate[1]);

    return [
        [Math.min(...latitudes), Math.min(...longitudes)], // юго-западный угол
        [Math.max(...latitudes), Math.max(...longitudes)]  // северо-восточный угол
    ];
}
