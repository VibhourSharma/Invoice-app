import React from "react";

const BillFrom = ({ onChange, formData }) => {
  return (
    <div className="mt-16">
      <div className="flex items-center mb-6">
        <h5 className="text-[#7C5DFA] font-semibold text-sm outline-none">
          Bill from
        </h5>
      </div>
      <div className="flex flex-col">
        <label htmlFor="senderAddress" className="text-slate-500 text-sm mb-2">
          Street Address
        </label>
        <input
          type="text"
          id="senderStreet"
          name="senderAddress.street"
          className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
          onChange={onChange}
          value={formData.senderAddress.street}
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <label htmlFor="senderCity" className="text-slate-500 text-sm">
            City
          </label>
          <input
            type="text"
            id="senderCity"
            name="senderAddress.city"
            className="border rounded-md p-2 w-[8rem] my-2 focus:outline-none"
            onChange={onChange}
            value={formData.senderAddress.city}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="senderPostCode" className="text-slate-500 text-sm">
            Post Code
          </label>
          <input
            type="text"
            id="sendePostCode"
            name="senderAddress.postCode"
            className="border rounded-md p-2 w-[8rem] my-2 focus:outline-none"
            onChange={onChange}
            value={formData.senderAddress.postCode}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="senderCountry" className="text-slate-500 text-sm">
            Country
          </label>
          <input
            type="text"
            id="senderCountry"
            name="senderAddress.country"
            className="border rounded-md p-2 w-[12rem] my-2 focus:outline-none"
            onChange={onChange}
            value={formData.senderAddress.country}
          />
        </div>
      </div>
    </div>
  );
};

export default BillFrom;
