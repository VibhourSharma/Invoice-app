import React from "react";

const BillFrom = ({ onChange }) => {
  return (
    <div className="mt-16">
      <div className="flex items-center mb-6">
        <h5 className="text-[#7C5DFA] font-semibold text-sm outline-none">
          Bill from
        </h5>
      </div>
      <div className="flex flex-col">
        <label htmlFor="streetAddress" className="text-slate-500 text-sm mb-2">
          Street Address
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <label htmlFor="city" className="text-slate-500 text-sm">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="border rounded-md p-2 w-[8rem] my-2 focus:outline-none"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="postCode" className="text-slate-500 text-sm">
            Post Code
          </label>
          <input
            type="number"
            id="postCode"
            name="postCode"
            className="border rounded-md p-2 w-[8rem] my-2 focus:outline-none"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="country" className="text-slate-500 text-sm">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="border rounded-md p-2 w-[12rem] my-2 focus:outline-none"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BillFrom;
