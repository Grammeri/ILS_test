import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'antd';

const ErrorHandler = () => {
    const routeState = useSelector((state) => state.route);
    const error = routeState?.error;


    if (!error) {
        return null;
    }

    return (
        <Alert
            message="Произошла ошибка"
            description={error}
            type="error"
            showIcon
        />
    );
};

export default ErrorHandler;
