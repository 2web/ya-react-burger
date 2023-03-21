import styles from "./header-nav-item.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { LocationDescriptor, Location } from "history";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

const NavItem = (props: { to: LocationDescriptor<unknown> | ((location: Location<unknown>) => LocationDescriptor<unknown>); children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
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