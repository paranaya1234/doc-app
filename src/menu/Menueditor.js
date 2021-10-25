import React, { useState, useContext, useEffect } from "react";
import { MenuContext } from "./Menucontext";
import { useParams } from "react-router-dom";
import Select from "react-select";

export default function MenuEditor() {
  const [title, setTitle] = useState("");
  const [redirectTo, setRedirectTo] = useState("");
  const [menus, setMenus] = useContext(MenuContext);
  const { id } = useParams();
  const [placement, setPlacement] = useState(null);

  const placementOptions = [
    { value: 0, label: "Top" },
    { value: 1, label: "Bottom" }
  ];

  useEffect(() => {
    menus.map(menu => {
      if (menu.id === id) {
        setTitle(menu.title);
        setRedirectTo(menu.redirectTo);
        setPlacement(menu.placement);
      }
    });
  }, [id, menus]);

  function updateMenu(event) {
    event.preventDefault();

    let menu = {
      id: id,
      title: title,
      redirectTo: redirectTo,
      placement: placement
    };
    setMenus(menu);
  }

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Edit Menu</h1>
      </div>

      <div className="card">
        <div className="card-body">
          <form onSubmit={e => updateMenu(e)}>
            <div className="form-group row">
              <label className="col-form-label col-sm-3">Title: *</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  value={title}
                  required={true}
                  className="form-control"
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-sm-3">Redirect To: *</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  value={redirectTo}
                  required={true}
                  className="form-control"
                  onChange={e => setRedirectTo(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-sm-3">Placement: *</label>
              <div className="col-sm-9">
                <Select
                  value={placement}
                  className="reactSelectContainer"
                  classNamePrefix="reactSelect"
                  isClearable={true}
                  onChange={selectedOption => setPlacement(selectedOption)}
                  options={placementOptions}
                />
                <input
                  type="text"
                  style={{
                    width: "100%",
                    height: "1px",
                    border: "0px",
                    padding: "0px",
                    position: "absolute",
                    opacity: 0
                  }}
                  defaultValue={placement ? "1" : ""}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
