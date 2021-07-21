import React from 'react';
import MyInput from 'src/components/global/input';
import MyInputArea from 'src/components/global/input-area';
import MyButton from 'src/components/global/button';
import styles from './auth.module.scss';

const MySignUp = () => {
    return (
        <div className={styles.authContainer}>
            <form className={styles.signinForm}>
                <h1 className={styles.title}>فروشگاه - ثبت نام</h1>
                <MyWrapper>
                    <MyInput
                        placeholder="نام خود را وارد کنید ..."
                        type="text"
                        label="نام"
                    />
                </MyWrapper>
                <MyWrapper>
                    <MyInput
                        placeholder="نام خانوادگی خود را وارد کنید ..."
                        type="text"
                        label="نام خانوادگی"
                    />
                </MyWrapper>
                <MyWrapper>
                    <MyInput
                        placeholder="ایمیل خود را وارد کنید ..."
                        type="email"
                        label="ایمیل"
                    />
                </MyWrapper>
                <MyWrapper>
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
                <MyButton>ثبت نام</MyButton>
            </form>
        </div>
    );
};

export default MySignUp;

const MyWrapper = ({ children, fullWidth = false }) => {
    return (
        <div
            className={`${styles.inputWrapper} ${fullWidth ? styles.full : ''}`}
        >
            {children}
        </div>
    );
};
