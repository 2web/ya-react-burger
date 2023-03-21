import styles from "./header-nav.module.scss";
import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from "../header-nav-item/header-nav-item";

const HeaderNavigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <NavItem isActive={true} value={"Конструктор"} to={"/"}>
          <BurgerIcon type={"primary"} />
        </NavItem>
        <NavItem isActive={false} value={"Лента заказов"} to={"/feed"}>
          <ListIcon type={"secondary"} />
        </NavItem>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
