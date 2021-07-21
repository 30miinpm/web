import React from 'react';
import { useRouter } from 'next/router';
import MyNavigation from 'src/components/global/navigation';
import 'src/assets/scss/global.scss';

function MyApp({ Component, pageProps }) {
    const excludedPages = [];
    const router = useRouter();
    return (
        <>
            {excludedPages.includes(router.asPath) ? (
                <Component {...pageProps} />
            ) : (
                <MyNavigation>
                    <Component {...pageProps} />
                </MyNavigation>
            )}
        </>
    );
}

export default MyApp;
