import React from "react";

export const Button = props => {
  const { disabled, name, loadingText, ...otherProps } = props;

  const loading = loadingText ? (
    " " + loadingText
  ) : (
    <span className="sr-only">Loading...</span>
  );

  if (disabled) {
    return (
      <button disabled={true} {...otherProps}>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        />
        {loading}
      </button>
    );
  } else {
    return (
      <button disabled={false} {...otherProps}>
        {name}
      </button>
    );
  }
};
