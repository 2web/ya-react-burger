import styles from './header-nav.module.css'
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from "../header-nav-item/header-nav-item";

function HeaderNavigation() {
    return (
        <nav>
            <ul className={styles.list}>
                <NavItem isActive={true} value={'Конструктор'}>
                    <BurgerIcon type={"primary"} />
                </NavItem>
                <NavItem isActive={false} value={'Лента заказов'}>
                    <ListIcon type={"secondary"}/>
                </NavItem>
            </ul>
        </nav>
    )
}

export default HeaderNavigation