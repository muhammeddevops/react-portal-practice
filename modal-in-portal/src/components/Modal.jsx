import React from "react";
import ReactDom from "react-dom";

const modal_styles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const overlay_styles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={overlay_styles}></div>

      <div style={modal_styles}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
