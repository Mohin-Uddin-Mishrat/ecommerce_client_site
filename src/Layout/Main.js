import React from 'react';
import { Outlet } from 'react-router-dom';
import Navar from '../Shared/Navar';

const Main = () => {
    return (
        <div>
            <Navar></Navar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;