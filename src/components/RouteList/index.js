import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'antd';
import {fetchRouteSagaAction, selectRoute} from '../../store/actions';
import './index.css'; // Import CSS for styling

const RouteList = () => {
    const dispatch = useDispatch();
    const {routes, selectedRoute} = useSelector((state) => state.route);

    useEffect(() => {

        if (selectedRoute) {
            dispatch(fetchRouteSagaAction(selectedRoute));
        }
    }, [selectedRoute, dispatch]);

    const columns = [
        {
            title: 'Маршрут',
            dataIndex: 'name',
            key: 'name',
        },
    ];

    const onRow = (route) => {
        return {
            onClick: () => {
                dispatch(selectRoute(route));
            },
            className: route.name === selectedRoute?.name ? 'selected-row' : '',
        };
    };

    return (
        <Table
            rowKey="name"
            columns={columns}
            dataSource={routes}
            onRow={onRow}
            pagination={false}
        />
    );
};

export default RouteList;
