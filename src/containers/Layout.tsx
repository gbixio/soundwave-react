import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBarContainer } from '../components';


const Layout = () => {
return (
    <>
        <NavBarContainer/>
        <main>
            <Outlet />
        </main>
    </>
)
}

export default Layout
