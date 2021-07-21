import React from 'react';
import MyUserButtonGuest from './guest';
import MyUserButtonLoggedIn from './user';

const MyUserButton = ({ loggedIn = false, user }) => {
    return (
        <>
            {loggedIn ? (
                <MyUserButtonLoggedIn user={user} />
            ) : (
                <MyUserButtonGuest />
            )}
        </>
    );
};

export default MyUserButton;
