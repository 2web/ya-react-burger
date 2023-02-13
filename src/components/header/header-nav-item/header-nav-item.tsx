import styles from "./header-nav-item.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
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

NavItem.propTypes = {
  isActive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default NavItem;