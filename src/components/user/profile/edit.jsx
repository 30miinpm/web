import React from 'react';
import Link from 'next/link';
import MyInput from 'src/components/global/input';
import MyInputArea from 'src/components/global/input-area';
import MyButton from 'src/components/global/button';
import styles from './userProfile.module.scss';

const MyUserProfileEdit = () => {
    return (
        <div className={styles.profileContainer}>
            <div>
                <h1 className={styles.title}>
                    <strong>
                        هادی عزیز خوش آمدید
                        {` | `}
                    </strong>
                    <span>موجودی حساب شما : ۲۵/۰۰۰</span>

                    <MyButton type="">افزایش موجودی</MyButton>
                </h1>
                <div className={styles.tabContainer}>
                    <Link href="/user/profile">
                        <button className={styles.active} type="button">
                            پروفایل
                        </button>
                    </Link>
                    <Link href="/user/profile#recept">
                        <button type="button">رسید ها</button>
                    </Link>
                </div>
                <form className={styles.editForm}>
                    <MyWrapper>
                        <MyInput placeholder="هادی" type="text" label="نام" />
                    </MyWrapper>
                    <MyWrapper>
                        <MyInput
                            placeholder="طباطبایی"
                            type="text"
                            label="نام خانوادگی"
                        />
                    </MyWrapper>
                    <MyWrapper fullWidth>
                        <MyInput
                            minlength="6"
                            label="رمزعبور"
                            type="password"
                            placeholder="رمزعبور خود را وارد کنید ..."
                        />
                    </MyWrapper>
                    <MyWrapper fullWidth>
                        <MyInputArea
                            rows="3"
                            label="آدرس"
                            type="text"
                            placeholder="آدرس خود را وارد کنید ..."
                        />
                    </MyWrapper>
                    <br />
                    <MyButton>ویرایش اطلاعات</MyButton>
                </form>
            </div>
        </div>
    );
};

export default MyUserProfileEdit;

const MyWrapper = ({ children, fullWidth = false }) => {
    return (
        <div
            className={`${styles.inputWrapper} ${fullWidth ? styles.full : ''}`}
        >
            {children}
        </div>
    );
};
