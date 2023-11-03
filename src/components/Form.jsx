import React from "react";

function Form() {
  return (
    <>
      <form action="" className="flex flex-col items-center h-full ml-8">
        <div className="mt-16">
          <div className="flex items-center mb-6">
            <h5 className="text-[#7C5DFA] font-semibold text-sm outline-none">
              Bill form
            </h5>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm mb-2">Street Address</span>
            <input
              type="text"
              className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <span className="text-slate-500 text-sm">City</span>
              <input
                type="text"
                className="border rounded-md p-2 w-[8rem] my-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-sm">Post Code</span>
              <input
                type="number"
                className="border rounded-md p-2 w-[8rem] my-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-sm">Country</span>
              <input
                type="text"
                className="border rounded-md p-2 w-[12rem] my-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* SECOND DIV */}

        <div className="mt-12">
          <div className="flex items-center mb-6">
            <h5 className="text-[#7C5DFA] font-semibold text-sm outline-none">
              Bill to
            </h5>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm mb-2">Client's Name</span>
            <input
              type="text"
              className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm mb-2">Client's Email</span>
            <input
              type="text"
              className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
              placeholder="e.g. email@xyz.com"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm mb-2">Street Address</span>
            <input
              type="text"
              className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <span className="text-slate-500 text-sm">City</span>
              <input
                type="text"
                className="border rounded-md p-2 w-[8rem] my-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-sm">Post Code</span>
              <input
                type="number"
                className="border rounded-md p-2 w-[8rem] my-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-sm">Country</span>
              <input
                type="text"
                className="border rounded-md p-2 w-[12rem] my-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm mb-2">Client's Email</span>
            <input
              type="text"
              className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
              placeholder="e.g. email@xyz.com"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm mb-2">Client's Email</span>
            <input
              type="text"
              className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
              placeholder="e.g. email@xyz.com"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500 text-sm mb-2">Client's Email</span>
            <input
              type="text"
              className="border rounded-md p-2 mt-2 my-6 w-[34rem] focus:outline-none"
              placeholder="e.g. email@xyz.com"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
