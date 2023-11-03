import Form from "./Form";

const SideDrawer = ({ isOpen, onClose }) => {
  const drawerStyle = {
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    overflowY: "auto",
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-[40rem] h-full bg-[#FFFFFF] ease-in-out delay-200 duration-300 shadow-2xl ml-24 rounded-r-3xl"
        style={drawerStyle}
      >
        <Form />
        <button
          onClick={onClose}
          className="p-2 text-white bg-red-300 outline-dotted"
        >
          discard
        </button>
      </div>
    </>
  );
};

export default SideDrawer;
