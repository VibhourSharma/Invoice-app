const AdditionalInfo = ({ onChange, formData }) => {
  return (
    <div className="mt-12 mobile:w-[90%]">
      <div className="flex flex-col">
        <label htmlFor="paymentDue" className="text-slate-500 text-sm mb-2">
          Invoice Date
        </label>
        <input
          type="date"
          id="paymentDue"
          name="paymentDue"
          className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none mobile:w-full"
          placeholder="e.g. email@xyz.com"
          onChange={onChange}
          value={formData.paymentDue}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="paymentTerms" className="text-slate-500 text-sm mb-2">
          Payment Terms
        </label>
        <select
          name="paymentTerms"
          placeholder="Select..."
          id="paymentTerms"
          className="border rounded-md px-2 py-3.5 mt-2 my-6 w-[34rem] focus:outline-none text-bold mobile:w-full"
          onChange={onChange}
          value={formData.paymentTerms}
        >
          <option value="1">Next 1 Day</option>
          <option value="7">Next 7 Days</option>
          <option value="14">Next 14 Days</option>
          <option value="30">Next 30 Days</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="text-slate-500 text-sm mb-2">
          Project Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none mobile:w-full"
          placeholder="e.g. Graphic Design Service"
          onChange={onChange}
          value={formData.description}
        />
      </div>
    </div>
  );
};

export default AdditionalInfo;
