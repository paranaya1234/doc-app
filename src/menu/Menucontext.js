import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialMenus = [
  {
    id: "1",
    title: "Menu 1",
    redirectTo: "menu-1",
    placement: { value: 0, label: "Top" }
  },
  {
    id: "2",
    title: "Menu 2",
    redirectTo: "menu-2",
    placement: { value: 0, label: "Bottom" }
  }
];

export const MenuContext = createContext(initialMenus);

const reducer = (menus, value) => {
  if (value.hasOwnProperty("id")) {
    const newMenus = menus.filter(menu => {
      return menu.id !== value.id;
    });
    return [...newMenus, value];
  } else {
    const newMenu = {
      id: uuidv4(),
      ...value
    };
    return [...menus, newMenu];
  }
};

export const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useReducer(reducer, initialMenus);

  return (
    <MenuContext.Provider value={[menus, setMenus]}>
      {children}
    </MenuContext.Provider>
  );
};
