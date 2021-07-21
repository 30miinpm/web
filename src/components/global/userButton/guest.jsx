import React from 'react';
import Link from 'next/link';
import styles from './userButton.module.scss';

const MyUserButtonGuest = () => {
    return (
        <>
            <div className={`${styles.userBtnContainer}`}>
                <Link href="/user/signin">
                    <button type="button" className={styles.userDropdown}>
                        ورود / ثبت نام
                    </button>
                </Link>
            </div>
        </>
    );
};

export default MyUserButtonGuest;
