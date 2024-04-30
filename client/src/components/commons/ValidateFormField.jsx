import React, { useState, useEffect } from "react";

const ValidateFormField = ({ children, errorMessage }) => {
  const [isTouched, setIsTouched] = useState(false);
  const [error, setError] = useState(null);

  const handleBlur = () => {
    setIsTouched(true);
  };

  useEffect(() => {
    if (isTouched && children.props.value.trim() === "") {
      setError(errorMessage);
    } else {
      setError(null);
    }
  }, [children.props.value, isTouched, errorMessage]);

  return (
    <>
      {React.cloneElement(children, {
        onBlur: handleBlur,
        className: error ? "is-invalid" : "",
      })}
      {error && <div className="small text-danger">{error}</div>}
    </>
  );
};

export default ValidateFormField;
