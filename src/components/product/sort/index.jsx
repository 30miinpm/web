import React, { useState } from 'react';
import styles from './productSort.module.scss';
import MyProductButton from '../button';

const MyProductSort = () => {
    const [sort, setSort] = useState(0);
    return (
        <>
            <div className={styles.sortContainer}>
                <span className={styles.label}>مرتب سازی بر اساس:</span>
                <MyProductButton active={sort === 0} onClick={() => setSort(0)}>
                    بیشترین فروش
                </MyProductButton>
                <MyProductButton
                    active={sort === 1}
                    type="button"
                    onClick={() => setSort(1)}
                >
                    قیمت
                </MyProductButton>
            </div>
        </>
    );
};

export default MyProductSort;
