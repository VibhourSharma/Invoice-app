import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import data from "../Data";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import ReceiptLayout from "../components/ReceiptLayout";

const Receipt = () => {
  const { id } = useParams();
  const [wholeData, setWholeData] = useState(
    JSON.parse(localStorage.getItem("invoices")) || data
  );
  const receiptData = wholeData.find((item) => item.id === id);

  const statusColors = {
    pending: "bg-orange-50 text-[#ff8f00]",
    paid: "bg-[#e7fff4] text-[#33D69F]",
    draft: "bg-gray-100 text-black",
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const showDeleteConfirmation = () => {
    setShowDeleteModal(true);
  };

  const hideDeleteConfirmation = () => {
    setShowDeleteModal(false);
  };

  const deleteReceipt = () => {
    const newData = wholeData.filter((item) => item.id !== id);
    localStorage.setItem("invoices", JSON.stringify(newData));
    setWholeData(newData);
    navigate(-1);
  };

  const markAsPaid = () => {
    const newStatus = "paid";
    receiptData.status = newStatus;

    const updatedStatusData = wholeData.map((statusData) =>
      statusData.id === id ? receiptData : statusData
    );
    console.log(updatedStatusData);
    localStorage.setItem("invoices", JSON.stringify(updatedStatusData));
    setWholeData(updatedStatusData);
  };

  return (
    <>
      <Navbar />
      {receiptData && (
        <ReceiptLayout
          receiptData={receiptData}
          statusColors={statusColors}
          goBack={goBack}
          showDeleteConfirmation={showDeleteConfirmation}
          // isPaid={isPaid}
          markAsPaid={markAsPaid}
        />
      )}
      {showDeleteModal && (
        <DeleteConfirmationModal
          receiptData={receiptData}
          hideDeleteConfirmation={hideDeleteConfirmation}
          deleteReceipt={deleteReceipt}
        />
      )}
    </>
  );
};

export default Receipt;
