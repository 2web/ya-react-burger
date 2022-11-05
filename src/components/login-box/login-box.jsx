import styles from './login-box.module.css'
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const LoginBox = () => {
    return (
        <div className={styles.login}>
            <a href='/' className={styles.login_link}>
                <ProfileIcon type="secondary"/>
                <p className="text text_type_main-default ml-2 text_color_inactive">
                    Личный кабинет
                </p>
            </a>
        </div>
    )
}

export default LoginBox