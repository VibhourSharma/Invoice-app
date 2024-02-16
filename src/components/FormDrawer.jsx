import React from "react";
import Form from "./Form/Form";

const FormDrawer = ({ isOpen, onClose, receiptData }) => {
  const backdropStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const drawerStyle = {
    transform: isOpen ? "translateX(0)" : "translateX(-120%)",
    overflowY: "auto",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <>
      <div style={backdropStyle} onClick={onClose} />
      <div
        className="fixed top-0 left-0 w-[40rem] h-full bg-white ease-in-out delay-200 duration-300 shadow-2xl ml-24 rounded-r-3xl"
        style={drawerStyle}
      >
        <Form onClose={onClose} receiptData={receiptData} />
      </div>
    </>
  );
};

export default FormDrawer;
