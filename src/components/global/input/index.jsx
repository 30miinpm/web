/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './input.module.scss';

const MyInput = ({ label, ...inputProps }) => {
    return (
        <div className={styles.inputControl}>
            <label>{label}</label>
            <input {...inputProps} />
        </div>
    );
};

export default MyInput;
