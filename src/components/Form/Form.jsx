import { useContext, useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";

const Form = ({ onClose }) => {
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
        quantity: 0,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  };

  const [formData, setFormData] = useState(defaultValue);

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

  const randomID = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetters =
      alphabet[Math.floor(Math.random() * alphabet.length)] +
      alphabet[Math.floor(Math.random() * alphabet.length)];
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${randomLetters}${randomNumbers}`;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const id = randomID();
    const createdAt = new Date().toLocaleDateString();
    const status = "pending";
    const formDataWithID = { ...formData, id, createdAt, status };
    const existingInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    const updatedInvoices = [...existingInvoices, formDataWithID];
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    setFormData(defaultValue);
    onClose();
  };

  const handleDraft = (e) => {
    e.preventDefault();
    const id = randomID();
    const createdAt = new Date().toLocaleDateString();
    const status = "draft";
    const formDataWithID = { ...formData, id, createdAt, status };
    const existingInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    const updatedInvoices = [...existingInvoices, formDataWithID];
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    setFormData(defaultValue);
    onClose();
  };

  return (
    <>
      <form className="flex flex-col items-center h-full ml-8">
        <BillFrom onChange={handleChange} />
        <BillTo onChange={handleChange} />
        <AdditionalInfo onChange={handleChange} />
        <ItemList formData={formData} setFormData={setFormData} />

        {/* Button section  */}
        <div className="flex w-[34rem] justify-between py-8">
          <div className="flex items-center">
            <button
              className="text-slate-500 font-semibold h-12 w-24 rounded-3xl bg-[#F2F2F2] text-sm"
              onClick={onClose}
            >
              Discard
            </button>
          </div>
          <div className="flex items-center justify-between w-[17rem]">
            <button
              onClick={handleDraft}
              className="bg-[#373B53] w-32 h-12 rounded-3xl text-slate-500 text-sm font-bold"
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
