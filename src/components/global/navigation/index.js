import React from 'react';
import MyNavigationNavbar from './navbar';
import MyNavigationFooter from './footer';

const MyNavigation = ({ children }) => {
    return (
        <>
            <MyNavigationNavbar />
            {children}
            <MyNavigationFooter />
        </>
    );
};
export default MyNavigation;
