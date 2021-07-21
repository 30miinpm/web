import React from 'react';
import { useRouter } from 'next/router';
import MyUserProfileEdit from './edit';
import MyUserProfileRecept from './recipts';

const MyUserProfile = () => {
    const router = useRouter();
    return (
        <>
            {router.asPath === '/user/profile' ? (
                <MyUserProfileEdit />
            ) : (
                <MyUserProfileRecept />
            )}
        </>
    );
};

export default MyUserProfile;
