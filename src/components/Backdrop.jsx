const Backdrop = ({ isOpen, onClick }) => {
  const backdropStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-slate-100 hidden z-999"
      style={backdropStyle}
      onClick={onClick}
    />
  );
};

export default Backdrop;
