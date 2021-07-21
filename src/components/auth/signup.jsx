import React from 'react';
import clsx from 'clsx';
import MyInput from 'src/components/global/input';
import MyInputArea from 'src/components/global/input-area';
import MyButton from 'src/components/global/button';
import styles from './auth.module.scss';

const MySignUp = () => {
    return (
        <div className={styles.authContainer}>
            <form className={styles.signinForm}>
                <h1 className={styles.title}>فروشگاه - ثبت نام</h1>
                <Wrapper>
                    <MyInput
                        placeholder="نام خود را وارد کنید ..."
                        type="text"
                        label="نام"
                    />
                </Wrapper>
                <Wrapper>
                    <MyInput
                        placeholder="نام خانوادگی خود را وارد کنید ..."
                        type="text"
                        label="نام خانوادگی"
                    />
                </Wrapper>
                <Wrapper>
                    <MyInput
                        placeholder="ایمیل خود را وارد کنید ..."
                        type="email"
                        label="ایمیل"
                    />
                </Wrapper>
                <Wrapper>
                    <MyInput
                        minlength="6"
                        label="رمزعبور"
                        type="password"
                        placeholder="رمزعبور خود را وارد کنید ..."
                    />
                </Wrapper>
                <Wrapper fullWidth>
                    <MyInputArea
                        rows="3"
                        label="آدرس"
                        type="text"
                        placeholder="آدرس خود را وارد کنید ..."
                    />
                </Wrapper>
                <br />
                <MyButton>ثبت نام</MyButton>
            </form>
        </div>
    );
};

export default MySignUp;

const Wrapper = ({ children, fullWidth = false }) => {
    return (
        <div
            className={clsx(styles.inputWrapper, fullWidth ? styles.full : '')}
        >
            {children}
        </div>
    );
};
