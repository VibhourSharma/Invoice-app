import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import data from "../../Data";

const Form = ({ onClose }) => {
  const [randomID, setRandomID] = useState("");

  const generateID = () => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomAlphabet1 =
      alphabets[Math.floor(Math.random() * alphabets.length)];
    let randomAlphabet2 =
      alphabets[Math.floor(Math.random() * alphabets.length)];

    const numbers = "1234567890";
    let randomNumber1 = numbers[Math.floor(Math.random() * numbers.length)];
    let randomNumber2 = numbers[Math.floor(Math.random() * numbers.length)];
    let randomNumber3 = numbers[Math.floor(Math.random() * numbers.length)];
    let randomNumber4 = numbers[Math.floor(Math.random() * numbers.length)];

    setRandomID(
      `${randomAlphabet1}${randomAlphabet2}${randomNumber1}${randomNumber2}${randomNumber3}${randomNumber4}`
    );
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  const values = {
    id: `${randomID}`,
    createdAt: formattedDate,
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

  const [formData, setFormData] = useState(values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateID();
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center h-full ml-8"
      >
        <BillFrom onChange={handleChange} />
        <BillTo onChange={handleChange} />
        <AdditionalInfo onChange={handleChange} />

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
            <button className="bg-[#373B53] w-32 h-12 rounded-3xl text-slate-500 text-sm font-bold">
              Save as Draft
            </button>
            <button
              type="submit"
              className="bg-[#7C5DFA] text-white h-12 w-32 rounded-3xl hover:bg-[#8e72fc] text-sm font-semibold"
              onClick={handleSubmit}
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
