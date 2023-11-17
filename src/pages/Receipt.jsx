import { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import data from "../Data";
import leftIcon from "../assets/icon-arrow-left.svg";
console.log(data);

const Receipt = () => {
  const { id } = useParams();
  const receiptData = data.find((item) => {
    return item.id === id;
  });

  const statusColors = {
    pending: "bg-orange-50 text-[#ff8f00]",
    paid: "bg-[#e7fff4] text-[#33D69F]",
    draft: "bg-gray-100 text-black",
  };

  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [wholeData, setWholeData] = useState(data);

  function goBack() {
    navigate(-1);
  }

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
      <div className="dark:bg-[#141625] dark:text-white bg-[#F2F2F2] flex min-h-screen justify-center font-def tracking-tighter">
        <div className="m-20 w-1/2 flex flex-col">
          {/* Go back button */}

          <div
            className="flex items-center cursor-pointer w-20"
            onClick={goBack}
          >
            <div className="flex items-center justify-center mr-4">
              <img src={leftIcon} alt="icon" className="w-full" />
            </div>
            <div className="flex items-center font-bold text-base">Go back</div>
          </div>

          {/* edit section */}

          <div className="mt-8 bg-white flex justify-between items-center p-8 rounded-lg dark:bg-[#1E2139]">
            <div className="flex justify-center items-center gap-4">
              <span className="text-slate-500">Status</span>
              <div
                className={`dark:bg-opacity-5 font-semibold rounded-lg flex items-center justify-center w-20 p-0.5 ${
                  statusColors[receiptData.status]
                } ${receiptData.status === "draft" ? "dark:text-white" : ""}`}
              >
                <div className="text-2xl">•</div> {receiptData.status}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 font-semibold text-sm">
              <button className="text-[#7C5DFA] bg-slate-50 h-12 w-20 rounded-3xl hover:bg-[#DFE3FA]">
                Edit
              </button>
              <button
                className="text-white bg-red-500 h-12 rounded-3xl w-24 hover:bg-red-400"
                onClick={showDeleteConfirmation}
              >
                Delete
              </button>
              <button className="bg-[#7C5DFA] text-white h-12 w-32 rounded-3xl hover:bg-[#8e72fc]">
                Mark as Paid
              </button>
            </div>
          </div>

          {/* Modal Popup */}

          {showDeleteModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
              <div className="bg-white rounded-lg flex flex-col p-8">
                <div className="text-3xl font-semibold mb-4">
                  <h1>Confirm Deletion</h1>
                </div>
                <p className="text-slate-500 text-lg mb-4 max-w-md">
                  Are you sure you want to delete Invoice #{receiptData.id}?
                  This action cannot be reversed.
                </p>
                <div className="flex gap-2 items-center justify-end">
                  <div>
                    <button
                      className="text-[#7C5DFA] bg-slate-50 h-12 w-20 rounded-3xl hover:bg-[#DFE3FA]"
                      onClick={hideDeleteConfirmation}
                    >
                      Cancel
                    </button>
                  </div>
                  <div>
                    <button
                      className="text-white bg-red-500 h-12 rounded-3xl w-24"
                      onClick={deleteReceipt}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Description section */}

          <div className="mt-8 bg-white flex flex-col justify-between items-center p-8 rounded-lg dark:bg-[#1E2139]">
            {/* part 1  */}
            <div className="w-full flex justify-between mb-8">
              <div>
                <div className="font-bold text-lg mb-2">{receiptData.id}</div>
                <div className="text-slate-500">{receiptData.description}</div>
              </div>
              <div className="flex flex-col text-slate-500">
                <span>{receiptData.clientAddress.street}</span>
                <span>{receiptData.clientAddress.city}</span>
                <span>{receiptData.clientAddress.postCode}</span>
                <span>{receiptData.clientAddress.country}</span>
              </div>
            </div>
            {/* part 2 */}
            <div className="w-full flex">
              <div className="mr-32">
                <div className="flex flex-col mb-8">
                  <span className="text-slate-500">Invoice Date</span>
                  <span className="font-bold text-xl">
                    {receiptData.createdAt}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500">Payment Due</span>
                  <span className="font-bold text-xl">
                    {receiptData.paymentDue}
                  </span>
                </div>
              </div>
              <div className="mr-32">
                <div className="flex flex-col mb-2">
                  <span className="text-slate-500">Bill to</span>
                  <span className="text-xl font-semibold mb-4">
                    {receiptData.clientName}
                  </span>
                  <span className="text-slate-500">
                    {receiptData.senderAddress.street}
                  </span>
                  <span className="text-slate-500">
                    {receiptData.senderAddress.city}
                  </span>
                  <span className="text-slate-500">
                    {receiptData.senderAddress.country}
                  </span>
                  <span className="text-slate-500">
                    {receiptData.senderAddress.postCode}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500">Sent to</span>
                <span className="text-xl font-semibold">
                  {receiptData.clientEmail}
                </span>
              </div>
            </div>
            {/* part-3 */}
            <div className="w-full px-8 pt-8 mt-8 bg-[#F9FAFE] dark:bg-[#252945] rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-slate-500 mb-6">Item Name</span>
                  {receiptData.items.map((item, index) => (
                    <span key={index} className="font-bold mb-6">
                      {item.name}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 mb-6">QTY.</span>
                  {receiptData.items.map((item, index) => (
                    <span key={index} className="font-bold mb-6">
                      {item.quantity}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 mb-6">Price</span>
                  {receiptData.items.map((item, index) => (
                    <span key={index} className="font-bold mb-6">
                      £ {item.price}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 mb-6">Total</span>
                  {receiptData.items.map((item, index) => (
                    <span key={index} className="font-bold mb-6">
                      £ {item.total}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between w-full p-6 rounded-b-xl bg-[#373B53] text-white dark:bg-[#0C0E16]">
              <span className="flex items-center justify-center">
                Amount Due
              </span>
              <span className="font-bold text-3xl">£ {receiptData.total}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Receipt;
