import { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import data from "../Data";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import ReceiptLayout from "../components/ReceiptLayout";

const Receipt = () => {
  const { id } = useParams();
  const receiptData = data.find((item) => item.id === id);

  const statusColors = {
    pending: "bg-orange-50 text-[#ff8f00]",
    paid: "bg-[#e7fff4] text-[#33D69F]",
    draft: "bg-gray-100 text-black",
  };

  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [wholeData, setWholeData] = useState(data);

  const goBack = () => {
    navigate(-1);
  };

  const showDeleteConfirmation = () => {
    setShowDeleteModal(true);
  };

  const hideDeleteConfirmation = () => {
    setShowDeleteModal(false);
  };

  const deleteReceipt = () => {
    const newData = wholeData.filter((item) => item.id !== id);
    setWholeData(newData);
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <ReceiptLayout
        receiptData={receiptData}
        statusColors={statusColors}
        goBack={goBack}
        showDeleteConfirmation={showDeleteConfirmation}
      />
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
