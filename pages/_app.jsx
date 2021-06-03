import React from 'react';
import 'src/assets/scss/global.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
