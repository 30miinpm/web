import React from 'react';
import styles from './wrapper.module.scss';

const MyProductWrapper = ({ Sidebar, Content }) => {
    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Content />
            </div>
        </div>
    );
};

export default MyProductWrapper;
