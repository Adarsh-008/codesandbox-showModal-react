import React from "react";

function Modal(props) {
  return (
    <div>
      <h2>Are you sure you want to continue.</h2>
      <p>Modal description is here.</p>
      <button
        onClick={() => {
          props.closeModal(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default Modal;
