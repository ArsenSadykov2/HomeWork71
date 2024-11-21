import * as React from "react";

interface Props {
  show: boolean;
  click: () => void;
}

const Backdrop: React.FC<Props> = ({ show, click }) => {
  return (
    <div
      onClick={click}
      className="modal-backdrop show"
      style={{ display: show ? "block" : "none" }}
    />
  );
};

export default Backdrop;
