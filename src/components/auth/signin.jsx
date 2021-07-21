import React from 'react';
import Link from 'next/link';
import MyInput from 'src/components/global/input';
import MyButton from 'src/components/global/button';
import styles from './auth.module.scss';

const MySignIn = () => {
    return (
        <div className={styles.authContainer}>
            <form className={styles.signinForm}>
                <h1 className={styles.title}>فروشگاه - ورود</h1>
                <MyInput
                    placeholder="ایمیل خود را وارد کنید ..."
                    type="email"
                    label="ایمیل"
                />
                <MyInput
                    minlength="6"
                    label="رمزعبور"
                    type="password"
                    placeholder="رمزعبور خود را وارد کنید ..."
                />
                <Link href="/user/signup" passHref>
                    <a href="#!">اگر ثبت نام نکرده اید اینجا را کلیک کنید‬</a>
                </Link>
                <MyButton>ورود</MyButton>
            </form>
        </div>
    );
};

export default MySignIn;
