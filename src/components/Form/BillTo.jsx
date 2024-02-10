import React from "react";

const BillTo = ({ onChange }) => {
  return (
    <div className="mt-12">
      <div className="flex items-center mb-6">
        <h5 className="text-[#7C5DFA] font-semibold text-sm outline-none">
          Bill to
        </h5>
      </div>
      <div className="flex flex-col">
        <label htmlFor="clientName" className="text-slate-500 text-sm mb-2">
          Client's Name
        </label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="clientEmail" className="text-slate-500 text-sm mb-2">
          Client's Email
        </label>
        <input
          type="text"
          id="clientEmail"
          name="clientEmail"
          className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
          placeholder="e.g. email@xyz.com"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="clientStreetAddress"
          className="text-slate-500 text-sm mb-2"
        >
          Street Address
        </label>
        <input
          type="text"
          id="clientStreetAddress"
          name="clientStreetAddress"
          className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <label htmlFor="clientCity" className="text-slate-500 text-sm">
            City
          </label>
          <input
            type="text"
            id="clientCity"
            name="clientCity"
            className="border rounded-md p-2 w-[8rem] my-2 focus:outline-none"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="clientPostCode" className="text-slate-500 text-sm">
            Post Code
          </label>
          <input
            type="number"
            id="clientPostCode"
            name="clientPostCode"
            className="border rounded-md p-2 w-[8rem] my-2 focus:outline-none"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="clientCountry" className="text-slate-500 text-sm">
            Country
          </label>
          <input
            type="text"
            id="clientCountry"
            name="clientCountry"
            className="border rounded-md p-2 w-[12rem] my-2 focus:outline-none"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BillTo;
