import React from "react";
import { NavLink } from "react-router-dom";
import { NavListItemStyled } from "./NavListItemStyled";
const NavListItem = ({ item, location, auth }) => {
  return (
    <NavListItemStyled>
      {!item.private && !item.restricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="font-medium"
            activeClassName="text-green-500"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {auth && item.private && !item.restricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="font-medium"
            activeClassName="text-green-500"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {!auth && !item.private && item.restricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            className="font-medium"
            activeClassName="text-green-500"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
    </NavListItemStyled>
  );
};

export default NavListItem;
