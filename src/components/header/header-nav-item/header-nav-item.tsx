import { FC } from "react";
import styles from "./header-nav-item.module.scss";
import { NavLink } from "react-router-dom";

type TNavItem = {
  isActive: boolean;
  value: string;
  to: string;
  children: React.ReactNode;
}

const NavItem: FC<TNavItem> = (props) => {
  return (
    <li>
      <NavLink to={props.to} exact={true} className={`${styles.item} pl-5 pr-5`}>
        {props.children}
        <p className={`text text_type_main-default ml-2`}>
          {props.value}
        </p>
      </NavLink>
    </li>
  );
};

export default NavItem;