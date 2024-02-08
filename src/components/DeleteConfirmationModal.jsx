import React from "react";

const DeleteConfirmationModal = ({
  receiptData,
  hideDeleteConfirmation,
  deleteReceipt,
}) => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
    <div className="bg-white rounded-lg flex flex-col p-8">
      <div className="text-3xl font-semibold mb-4">
        <h1>Confirm Deletion</h1>
      </div>
      <p className="text-slate-500 text-lg mb-4 max-w-md">
        Are you sure you want to delete Invoice #{receiptData.id}? This action
        cannot be reversed.
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
);

export default DeleteConfirmationModal;
