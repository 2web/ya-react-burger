import styles from './header.module.css'
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'

import HeaderNavigation from "../header-nav/header-nav";
import LoginBox from "../login-box/login-box";

const AppHeader = () => {
    return (
        <>
            <header className={`${styles.header} pt-4 pb-4`} >
                <HeaderNavigation/>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <LoginBox />
            </header>
        </>
    )
}

export default AppHeader