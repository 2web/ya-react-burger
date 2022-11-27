import styles from "./header-nav-item.module.scss";
import PropTypes from "prop-types";

const NavItem = (props) => {
  return (
    <li>
      <a href="/" className={`${styles.item} pl-5 pr-5`}>
        {props.children}
        <p className={`text text_type_main-default ml-2 ${!props.isActive && "text_color_inactive"}`}>
          {props.value}
        </p>
      </a>
    </li>
  );
};

NavItem.propTypes = {
  isActive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default NavItem;