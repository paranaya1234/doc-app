import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "./Menucontext";
import Select from "react-select";

export default function Menus() {
  const [menus, setMenus] = useContext(MenuContext);

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Menu Index</h1>

        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/menu/new">Create New Menu</Link>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Redirect To</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {menus.map(menu => (
                    <tr key={menu.id}>
                      <td>{menu.title}</td>
                      <td>{menu.redirectTo}</td>
                      <td>
                        <Link
                          to={`/menu/${menu.id}`}
                          className="btn btn-primary btn-xs"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
