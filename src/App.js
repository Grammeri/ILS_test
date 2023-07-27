import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import { Col, Layout, Row, Spin } from 'antd';
import { getError, getSelectedRoute, getLoadingStatus } from './store/selectors';
import RouteList from './components/RouteList';
import ErrorHandler from './components/ErrorHandler';
import { myIcon, polylineOptions, ChangeView, getCenter } from './helpers';
import 'leaflet/dist/leaflet.css';
import '../src/styles/App.scss';

const { Content } = Layout;

function App() {
  const dispatch = useDispatch();
  const selectedRoute = useSelector(getSelectedRoute);
  const error = useSelector(getError);
  const loading = useSelector(getLoadingStatus);

  const { waypoints = [], polyline = {} } = selectedRoute || {};
  const { coordinates = [] } = polyline;

  const center = getCenter(coordinates);

  return (
      <Layout className="app">
        {error && <ErrorHandler error={error} />}
        {loading && (
            <div className="app__spinner-container">
              <Spin size="large" />
            </div>
        )}
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
                    <Marker key={index} position={point} icon={myIcon} />
                ))}
                <Polyline positions={coordinates} {...polylineOptions} />
              </MapContainer>
            </Col>
          </Row>
        </Content>
      </Layout>
  );
}

export default App;
