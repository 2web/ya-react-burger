import styles from './login-box.module.scss'
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from 'react-router-dom';

const LoginBox = () => {
    return (
        <div className={styles.login}>
            <NavLink to="/profile"  className={styles.login_link} activeClassName={styles.active}>
                <ProfileIcon type="secondary"/>
                <p className="text text_type_main-default ml-2">
                    Личный кабинет
                </p>
            </NavLink>
        </div>
    )
}

export default LoginBox