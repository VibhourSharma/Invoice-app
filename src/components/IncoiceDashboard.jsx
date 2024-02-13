import { useState, useEffect } from "react";
import plusIcon from "../assets/plus.png";
import data from "../Data";
import InvoiceFilter from "./InvoiceFilter";
import InvoiceList from "./InvoiceList";

const statusColors = {
  pending: "bg-orange-50 text-[#ff8f00]",
  paid: "bg-[#e7fff4] text-[#33D69F]",
  draft: "bg-gray-100 text-black",
};

const InvoiceDashboard = ({ handleNewInvoiceClick }) => {
  const [initialValue, setInitialValue] = useState([]);
  const locallySavedInvoices =
    JSON.parse(localStorage.getItem("invoices")) || data;

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(locallySavedInvoices));
    setInitialValue(locallySavedInvoices);
    setFilteredData(locallySavedInvoices);
  }, [locallySavedInvoices.length]);

  const [isChecked, setIsChecked] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filterValue)
        ? prevFilters.filter((filter) => filter !== filterValue)
        : [filterValue]
    );
  };

  useEffect(() => {
    const updatedData =
      selectedFilters.length === 0
        ? locallySavedInvoices
        : initialValue.filter((invoice) =>
            selectedFilters.includes(invoice.status)
          );

    setFilteredData(updatedData);
  }, [selectedFilters]);

  return (
    <div className="dark:bg-[#141625] dark:text-white bg-[#F2F2F2] flex min-h-screen justify-center tracking-tighter">
      <div className="m-20 w-1/2">
        <div className="flex justify-between mb-16">
          <div>
            <h1 className="text-4xl font-bold">Invoices</h1>
            <p className="text-base text-slate-500">
              There are a total {filteredData.length} Invoices
            </p>
          </div>
          <div className="flex items-center justify-between w-72">
            <InvoiceFilter
              isChecked={isChecked}
              toggleCheckbox={toggleCheckbox}
              selectedFilters={selectedFilters}
              handleFilterChange={handleFilterChange}
              statusColors={statusColors}
            />
            <button
              className="bg-[#7C5DFA] text-white flex items-center rounded-r-3xl rounded-l-3xl text-base font-bold p-2 gap-3"
              onClick={handleNewInvoiceClick}
            >
              <img src={plusIcon} alt="plus" className="rounded-full" />
              New Invoice
            </button>
          </div>
        </div>
        <InvoiceList filteredData={filteredData} statusColors={statusColors} />
      </div>
    </div>
  );
};

export default InvoiceDashboard;
