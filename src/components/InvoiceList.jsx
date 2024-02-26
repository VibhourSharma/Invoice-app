import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../assets/icon-arrow-right.svg";

const InvoiceList = ({ statusColors, filteredData }) => {
  const calculateTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.total;
    });
    return total;
  };

  return (
    <>
      {filteredData.map((invoice) => {
        return (
          <Link to={`/receipt/${invoice.id}`} key={invoice.id}>
            <div className="flex rounded-lg h-24 bg-white mt-4 justify-between dark:bg-[#1E2139] hover:border hover:border-[#7C5DFA] cursor-pointer">
              <div className="flex justify-center items-center">
                <span className="font-bold mr-12 ml-8">
                  <span className="text-slate-500">#</span>
                  {invoice.id}
                </span>
                <span className="text-slate-500 mr-12">
                  {invoice.createdAt}
                </span>
                <span className="text-slate-500">{invoice.clientName}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xl mr-12">
                  £ {calculateTotal(invoice.items)}
                </span>
                <div
                  className={`dark:bg-opacity-5 font-semibold rounded-lg flex items-center justify-center w-20 p-0.5 mr-12 ${
                    statusColors[invoice.status]
                  } ${invoice.status === "draft" ? "dark:text-white" : ""}`}
                >
                  <span className="text-3xl">•</span> {invoice.status}
                </div>
                <img src={rightArrow} alt=">" className="mr-8" />
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default InvoiceList;
