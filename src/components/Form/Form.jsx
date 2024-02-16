import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import FormItemList from "./FormItemList";

const randomID = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetters =
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)];
  const randomNumbers = Math.floor(1000 + Math.random() * 9000);
  return `${randomLetters}${randomNumbers}`;
};

const defaultValue = {
  id: "",
  createdAt: "",
  paymentDue: "",
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  status: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [
    {
      name: "",
      quantity: 0.0,
      price: 0.0,
      total: 0.0,
    },
  ],
  total: 0.0,
};

const Form = ({ onClose, receiptData }) => {
  console.log(receiptData);

  const [formData, setFormData] = useState(receiptData || defaultValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const path = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [path[0]]: {
          ...(prevData[path[0]] || {}),
          [path[1]]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAction = (e, status) => {
    e.preventDefault();
    const id = randomID();
    const createdAt = new Date().toLocaleDateString();
    const formDataWithID = { ...formData, id, createdAt, status };
    const existingInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    const updatedInvoices = [formDataWithID, ...existingInvoices];
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    setFormData(defaultValue);
    onClose();
  };

  const handleSave = (e) => {
    handleAction(e, "pending");
  };

  const handleDraft = (e) => {
    handleAction(e, "draft");
  };

  const handleDiscard = (e) => {
    e.preventDefault();
    setFormData(defaultValue);
    onClose();
  };

  return (
    <>
      <form className="flex flex-col items-center h-full ml-8">
        <BillFrom onChange={handleChange} formData={formData} />
        <BillTo onChange={handleChange} formData={formData} />
        <AdditionalInfo onChange={handleChange} formData={formData} />
        <FormItemList
          formData={formData}
          setFormData={setFormData}
          onChange={handleChange}
        />

        <div className="flex w-[34rem] justify-between py-8">
          <div className="flex items-center">
            <button
              className="text-[#7E88C3] font-semibold h-12 w-24 rounded-3xl bg-[#F2F2F2] text-sm"
              onClick={handleDiscard}
            >
              Discard
            </button>
          </div>
          <div className="flex items-center justify-between w-[17rem]">
            <button
              onClick={handleDraft}
              className="bg-[#373B53] w-32 h-12 rounded-3xl text-[#7E88C3] text-sm font-bold"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="bg-[#7C5DFA] text-white h-12 w-32 rounded-3xl hover:bg-[#8e72fc] text-sm font-semibold"
              onClick={handleSave}
            >
              Save & Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
