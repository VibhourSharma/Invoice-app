const SideDrawer = ({ isOpen, onClose }) => {
  const drawerStyle = {
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
  };

  return (
    <div
      className="fixed top-0 left-0 w-[40rem] h-full bg-[#FFFFFF] ease-in-out delay-200 duration-300 shadow-2xl ml-24 rounded-r-3xl"
      style={drawerStyle}
    >
      <div className="side-drawer-header">
        <button onClick={onClose}>Close</button>
      </div>
      <form> hey there</form>
    </div>
  );
};

export default SideDrawer;
