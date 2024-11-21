import Backdrop from "../Backdrop/Backdrop.tsx";
import * as React from "react";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title?: string;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ show, title, children, closeModal }) => {
  return (
    <>
      <Backdrop show={show} click={closeModal} />
      <div
        className="modal show"
        style={{
          display: show ? "block" : "none",
          width: "500px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
            </div>
            <div className="p-3">{children}</div>
            <div className="modal-footer">
              <button onClick={closeModal} className="btn btn-danger">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
