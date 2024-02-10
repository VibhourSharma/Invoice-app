import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";

const Form = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
