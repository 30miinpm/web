import React from 'react';
import MyUserButtonGuest from './guest';
import MyUserButtonLoggedIn from './user';

const MyUserButton = ({ loggedIn = false }) => {
    return <>{loggedIn ? <MyUserButtonGuest /> : <MyUserButtonLoggedIn />}</>;
};

export default MyUserButton;
