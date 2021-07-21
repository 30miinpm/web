/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './productBtn.module.scss';

const MyProductButton = ({
    children,
    active = false,
    className,
    type = 'button',
    ...buttonProps
}) => {
    return (
        <>
            <button
                className={`${styles.sortBtn} ${
                    active ? styles.active : ''
                } ${className}`}
                type={type}
                {...buttonProps}
            >
                {children}
            </button>
        </>
    );
};

export default MyProductButton;
