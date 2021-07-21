import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';

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
                    <a href="#!">تماس با ما</a>
                </li>
                <li>
                    <a href="#!">پشتیبانی</a>
                </li>
                <li>
                    <a href="#!">محصولات</a>
                </li>
            </ul>
            <Link href="/user/signin">
                <button type="button" className={styles.userDropdown}>
                    ورود / ثبت نام
                </button>
            </Link>
        </div>
    );
};
export default MyNavigationNavbar;
