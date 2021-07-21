import React from 'react';
import styles from './banner.module.scss';

const MyBanner = () => {
    return (
        <div className={styles.bannerContainer}>
            <form>
                <h1 className={styles.title}>در محصولات سایت جستوجو کنید</h1>
                <input
                    className={styles.searchBox}
                    type="text"
                    minLength="3"
                    placeholder="نام محصول خود را وارد کنید ..."
                />
                <button className={styles.searchBtn} type="submit">
                    جستجو کنید
                </button>
            </form>
        </div>
    );
};

export default MyBanner;
