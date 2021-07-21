/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import MyProductButton from '../button';
import styles from './productCategory.module.scss';

const MyProductCategory = () => {
    const [currentCat, setCurrentCat] = useState(1);
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.categoryList}>
                <span className={styles.title}>دسته بندی ها</span>
                <ul>
                    <li onClick={() => setCurrentCat(1)}>
                        <MyProductButton active={currentCat === 1} />
                        دسته بندی اول
                    </li>
                    <li onClick={() => setCurrentCat(2)}>
                        <MyProductButton active={currentCat === 2} />
                        دسته بندی اول
                    </li>
                    <li onClick={() => setCurrentCat(3)}>
                        <MyProductButton active={currentCat === 3} />
                        دسته بندی اول
                    </li>
                    <li onClick={() => setCurrentCat(4)}>
                        <MyProductButton active={currentCat === 4} />
                        دسته بندی اول
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MyProductCategory;
