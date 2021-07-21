/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './userButton.module.scss';

const MyUserButtonLoggedIn = ({ user }) => {
    const [dropDownStatus, setDropDownStatus] = useState(false);
    return (
        <div
            className={`${styles.userBtnContainer} ${
                dropDownStatus ? styles.dropDownOpen : ''
            }`}
        >
            <button
                type="button"
                className={styles.userDropdown}
                onClick={() => setDropDownStatus(!dropDownStatus)}
            >
                <span className={styles.chevronDown} /> {user}
            </button>
            <ul className={`${styles.dropDownContainer}`}>
                <Link href="/user/profile">
                    <li onClick={() => setDropDownStatus(!dropDownStatus)}>
                        پروفایل
                    </li>
                </Link>
                <li onClick={() => setDropDownStatus(!dropDownStatus)}>
                    خروج از حساب
                </li>
            </ul>
        </div>
    );
};

export default MyUserButtonLoggedIn;
