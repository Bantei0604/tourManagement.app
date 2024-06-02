import React from "react";
import "../styles/home.css";

const RegisterForm = ({ show, handleClose, children }) => {
  const showHideClassName = show ? "modal-display-block" : "modal-display-none";

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    </>
  );
};

export default RegisterForm;
