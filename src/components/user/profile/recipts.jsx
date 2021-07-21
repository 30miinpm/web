import Link from 'next/link';
import React from 'react';
import styles from './userProfile.module.scss';

const MyUserProfileRecept = () => {
    return (
        <div className={styles.profileContainer}>
            <div>
                <h1 className={styles.title}>
                    <strong>هادی عزیز خوش آمدید</strong>
                </h1>

                <div className={styles.tabContainer}>
                    <Link href="/user/profile">
                        <button type="button">پروفایل</button>
                    </Link>
                    <Link href="/user/profile#recept">
                        <button className={styles.active} type="button">
                            رسید ها
                        </button>
                    </Link>
                </div>
                <div className={styles.receptTable}>
                    <table>
                        <tr>
                            <th>کد پیگیری</th>
                            <th>کالا</th>
                            <th>قیمت پرداخت شده</th>
                            <th>آدرس ارسال شده</th>
                        </tr>
                        <tr>
                            <td>SHOP102030</td>
                            <td>موس کیمینگ ریزر</td>
                            <td>۱۰,۰۰۰ تومان</td>
                            <td>تهران،تهران،امیرکبیر</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyUserProfileRecept;
