import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBarContainer } from '../components';
import { Circle1, Circle2, Circle3 } from '../components/BgCircles/BgStyle';


const Layout = () => {
return (
    <>  
        <NavBarContainer/>
        <main>
            <Outlet />
        </main>
        <Circle1/>
        <Circle2/>        
        <Circle3/>
    </>
)
}

export default Layout
