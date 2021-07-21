import React from 'react';
import Link from 'next/link';
import MyProductButton from '../button';
import styles from './productItem.module.scss';

const MyProductItem = ({ item }) => {
    const { image, category, ID, title, price } = item;
    return (
        <div className={styles.itemContainer}>
            <div className={styles.productItem}>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <h4>{category}</h4>
                <hr />
                <p>
                    <span>{price} تومان</span>
                    <Link href={`/product/${ID}`}>
                        <MyProductButton active>خرید محصول</MyProductButton>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default MyProductItem;
