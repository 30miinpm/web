import React from 'react';
import MyNavigationNavbar from './navbar';
import MyNavigationFooter from './footer';

const MyNavigation = ({ children }) => {
    return (
        <>
            <MyNavigationNavbar />
            <div style={{ minHeight: 'calc(100vh - 95px)' }}>{children}</div>
            <MyNavigationFooter />
        </>
    );
};
export default MyNavigation;
