/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './button.module.scss';

const MyButton = ({ children, ...inputProps }) => {
    return (
        <>
            <button className={styles.button} {...inputProps}>
                {children}
            </button>
        </>
    );
};

export default MyButton;
