import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';
import MyUserButton from '../../userButton';

const MyNavigationNavbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <ul className={styles.menuContainer}>
                <li>
                    <span className={styles.logo}>فروشگاه</span>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a href="#!">صفحه اصلی</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a href="#!">تماس با ما</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a href="#!">پشتیبانی</a>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <a href="#!">محصولات</a>
                    </Link>
                </li>
            </ul>
            <MyUserButton loggedIn user="هادی" />
        </div>
    );
};
export default MyNavigationNavbar;
