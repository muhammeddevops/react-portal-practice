import React, { useState } from "react";
import Modal from "./components/Modal";

const button_wrapper_styles = {
  position: "relative",
  zIndex: 1,
};

const other_content_styles = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "blue",
  padding: "10px",
};

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={button_wrapper_styles}>
        <button onClick={() => setOpen(true)}> Open Modal</button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        Modal pop up!
      </Modal>

      <div style={other_content_styles}>Other Content</div>
    </>
  );
}
