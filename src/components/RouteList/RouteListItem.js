import React from 'react';
import { useDispatch } from 'react-redux';
import { selectRoute, fetchRouteSagaAction } from '../../redux/actions';

// В RouteListItem
const RouteListItem = ({ route }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log('Dispatching selectRoute with route:', route); // Add this line
        dispatch(selectRoute(route.name));

        // Нам больше не нужно отправлять отдельный запрос на маршрут.
        // Теперь выбранный маршрут хранится в состоянии Redux,
        // и MapComponent обновится автоматически при изменении состояния.
    };

    return (
        <div onClick={handleClick}>
            {route && route.name}
        </div>
    );
};

export default RouteListItem;

