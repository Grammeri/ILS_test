import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, Marker, Polyline, TileLayer, useMap } from 'react-leaflet';
import { Col, Layout, Row } from 'antd';
import { getError, getSelectedRoute } from './store/selectors';
import RouteList from './components/RouteList';
import ErrorHandler from './components/ErrorHandler';
import { myIcon, polylineOptions } from './helpers';
import 'leaflet/dist/leaflet.css';
import '../src/styles/App.scss';

const { Content } = Layout;

function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

function getCenter(coordinates) {
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

function App() {
  const dispatch = useDispatch();
  const selectedRoute = useSelector(getSelectedRoute);
  const error = useSelector(getError);

  const { waypoints = [], polyline = {} } = selectedRoute || {};
  const { coordinates = [] } = polyline;

  const center = getCenter(coordinates);

  return (
      <Layout className="app">
        {error && <ErrorHandler error={error} />}
        <Content>
          <Row>
            <Col span={6}>
              <RouteList />
            </Col>
            <Col span={18}>
              <MapContainer style={{ height: '100vh' }}>
                <ChangeView center={center} zoom={12} />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {coordinates.map((point, index) => (
                    <Marker
                        key={index}
                        position={point}
                        icon={myIcon}
                    />
                ))}
                <Polyline
                    positions={coordinates}
                    {...polylineOptions}
                />
              </MapContainer>
            </Col>
          </Row>
        </Content>
      </Layout>
  );
}

export default App;
