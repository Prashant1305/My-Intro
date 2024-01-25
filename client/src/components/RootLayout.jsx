import React from 'react';
import { Outlet } from 'react-router-dom';
import './RootLayout.css';
import Navbar from './Navbar';

function RootLayout() {

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;