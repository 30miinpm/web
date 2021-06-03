import React from 'react';
import styles from './navbar.module.scss';

const MyNavigationNavbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <span className={styles.logo}>فروشگاه</span>
            <ul className={styles.menuContainer}>
                <li>
                    <a href="#!">صفحه اصلی</a>
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
            <button type="button" className={styles.userDropdown}>
                ورود / ثبت نام
            </button>
        </div>
    );
};
export default MyNavigationNavbar;
