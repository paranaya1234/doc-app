import React, { useState, useContext } from "react";
import { MenuContext } from "./Menucontext";
import { Form } from "./Form";

export default function MenuCreator() {
  const [menus, setMenus] = useContext(MenuContext);
  const [pendingButtonIds, setPendingButtonIds] = useState([]);

  const wait = () => new Promise(resolve => setTimeout(resolve, 1000));

  function createMenu(form) {
    if (!pendingButtonIds.includes("createMenuButton")) {
      setPendingButtonIds(pendingButtonIds => [
        ...pendingButtonIds,
        "createMenuButton"
      ]);
      wait().then(response => {
        setMenus(form);
        setPendingButtonIds(pendingButtonIds =>
          pendingButtonIds.filter(id => id !== "createMenuButton")
        );
      });
    }
  }

  const buttonProps = {
    name: "Create",
    loadingText: "Creating...",
    disabled: pendingButtonIds.includes("createMenuButton")
  };

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Create New Menu</h1>
      </div>

      <div className="card">
        <div className="card-body">
          <Form buttonProps={buttonProps} onSubmit={form => createMenu(form)} />
        </div>
      </div>
    </div>
  );
}
