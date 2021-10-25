import React, { useState } from "react";
import { Button } from "../Components/Button";
import Select from "react-select";

export const Form = ({
  buttonProps,
  onSubmit,
  form = {
    title: "",
    redirectTo: "",
    placement: null
  }
}) => {
  const [title, setTitle] = useState(form.title);
  const [redirectTo, setRedirectTo] = useState(form.redirectTo);
  const [placement, setPlacement] = useState(form.placement);

  const placementOptions = [
    { value: 0, label: "Top" },
    { value: 1, label: "Bottom" }
  ];

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit({ ...form, title, redirectTo, placement });
      }}
    >
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

      <Button
        type="submit"
        id="createMenuButton"
        className="btn btn-primary"
        disabled={buttonProps.disabled}
        name={buttonProps.name}
        loadingText={buttonProps.loadingText}
      />
    </form>
  );
};
