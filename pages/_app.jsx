import React from 'react';
import MyNavigation from 'src/components/global/navigation';
import 'src/assets/scss/global.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <MyNavigation>
                <Component {...pageProps} />
            </MyNavigation>
        </>
    );
}

export default MyApp;
