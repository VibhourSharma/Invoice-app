import { useState } from "react";
import Navbar from "../components/Navbar";
import InvoiceDashboard from "../components/IncoiceDashboard";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNewInvoiceClick = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Navbar isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      <InvoiceDashboard handleNewInvoiceClick={handleNewInvoiceClick} />
    </>
  );
};

export default Home;
