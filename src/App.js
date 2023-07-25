import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import { Layout, Row, Col } from 'antd';
import L from 'leaflet';
import { fetchRouteSagaAction } from './store/actions';
import { getSelectedRoute, getError } from './store/selectors';
import RouteList from './components/RouteList';
import ErrorHandler from './components/ErrorHandler';
import { polylineOptions, iconOptions } from './helpers';
import 'leaflet/dist/leaflet.css';
import '../src/styles/App.scss';

const { Content } = Layout;

function App() {
  const dispatch = useDispatch();
  const selectedRoute = useSelector(getSelectedRoute);
  const error = useSelector(getError);

/*  useEffect(() => {
    if (selectedRoute) {
      dispatch(fetchRouteSagaAction(selectedRoute));
    }
  }, [selectedRoute, dispatch]);*/

  // Use a default value for waypoints when selectedRoute is null
  const { waypoints = [], polyline  } = selectedRoute || {};
  const { coordinates = []} = polyline || {};

  const center = []

  // Debugging output
  // console.log('Waypoints:', waypoints);

  // console.log(coordinates)
  return (
      <Layout className="app">
        {error && <ErrorHandler error={error} />}
        <Content>
          <Row>
            <Col span={6}>
              <RouteList />
            </Col>
            <Col span={18}>
              <MapContainer center={[59.84, 30.35]} zoom={12} style={{ height: '100vh' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/*{waypoints.map((point, index) => (*/}
                {/*    <Marker*/}
                {/*        key={index}*/}
                {/*        position={point.location}*/}
                {/*        icon={L.icon(iconOptions)}*/}
                {/*    />*/}
                {/*))}*/}
                {coordinates.map((point, index) =>  (
                        <Marker
                            key={index}
                            position={point}
                            icon={L.icon(iconOptions)}
                        />
                    )
                )}

                { <Polyline
                    positions={coordinates}
                    {...polylineOptions}
                />}
              </MapContainer>
            </Col>
          </Row>
        </Content>
      </Layout>
  );
}

export default App;
