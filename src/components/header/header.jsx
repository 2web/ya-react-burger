import styles from './header.module.scss'
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom";

import HeaderNavigation from "./header-nav/header-nav";
import LoginBox from "../login/login-box/login-box";

const AppHeader = () => {
    return (
        <header className={`${styles.header} pt-4 pb-4`} >
            <HeaderNavigation/>
            <div className={styles.logo}>
                <Link to="/"><Logo/></Link>
            </div>
            <LoginBox />
        </header>
    )
}

export default AppHeader