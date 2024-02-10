import React from "react";

const AdditionalInfo = ({ onChange }) => {
  return (
    <div className="mt-12">
      <div className="flex flex-col">
        <label htmlFor="invoiceDate" className="text-slate-500 text-sm mb-2">
          Invoice Date
        </label>
        <input
          type="date"
          id="invoiceDate"
          name="invoiceDate"
          className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
          placeholder="e.g. email@xyz.com"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="paymentTerms" className="text-slate-500 text-sm mb-2">
          Payment Terms
        </label>
        <select
          id="paymentTerms"
          className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
          onChange={onChange}
        >
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="projectDescription"
          className="text-slate-500 text-sm mb-2"
        >
          Project Description
        </label>
        <input
          type="text"
          id="projectDescription"
          name="projectDescription"
          className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
          placeholder="e.g. Graphic Design Service"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default AdditionalInfo;
