import { useState } from "react";
import downIcon from "../assets/icon-arrow-down.svg";
import plusIcon from "../assets/plus.png";
import rightArrow from "../assets/icon-arrow-right.svg";
import data from "../Data";
import { Link } from "react-router-dom";

const InvoiceDashboard = () => {
  const statusColors = {
    pending: "bg-orange-50 text-[#ff8f00]",
    paid: "bg-[#e7fff4] text-[#33D69F]",
    draft: "bg-gray-100 text-black",
  };

  const [isChecked, setIsChecked] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  function handleOpen() {
    setIsChecked(!isChecked);
  }

  function filter(e) {
    const filterValue = e.target.value;
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filterValue)) {
        return prevFilters.filter((filter) => filter !== filterValue);
      } else {
        return [filterValue];
      }
    });
  }

  const filteredData =
    selectedFilters.length === 0
      ? data
      : data.filter((invoice) => selectedFilters.includes(invoice.status));

  return (
    <div className="dark:bg-[#141625] dark:text-white bg-[#F2F2F2] flex min-h-screen justify-center font-def tracking-tighter">
      <div className="m-20 w-1/2">
        <div className="flex justify-between mb-16">
          <div>
            <h1 className="text-4xl font-bold">Invoices</h1>
            <p className="text-base text-slate-500">
              There are a total {filteredData.length} Invoices
            </p>
          </div>
          <div className="flex items-center justify-between w-72">
            <div
              className="flex items-center text-base font-bold font-def cursor-pointer relative"
              onClick={handleOpen}
            >
              Filter by Status
              <img src={downIcon} alt="icon" className="ml-2" />
            </div>
            {isChecked && (
              <div className="absolute mt-44 bg-white rounded-2xl shadow-2xl w-48 px-2 py-3.5 flex flex-col justify-center text-base font-bold dark:bg-[#1E2139]">
                <div className="flex m-1">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="ml-4 w-4 h-4 cursor-pointer"
                      onChange={(e) => filter(e)}
                      checked={selectedFilters.includes("draft")}
                      value="draft"
                    />
                    Draft
                  </label>
                </div>
                <div className="flex m-1">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="relative ml-4 w-4 h-4 cursor-pointer"
                      value="pending"
                      checked={selectedFilters.includes("pending")}
                      onChange={(e) => filter(e)}
                    />
                    Pending
                  </label>
                </div>
                <div className="flex m-1">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="ml-4 w-4 h-4 cursor-pointer"
                      checked={selectedFilters.includes("paid")}
                      onChange={(e) => filter(e)}
                      value="paid"
                    />
                    Paid
                  </label>
                </div>
              </div>
            )}
            <button className="bg-[#7C5DFA] text-white flex items-center rounded-r-3xl rounded-l-3xl text-base font-bold p-2 gap-3">
              <img src={plusIcon} alt="plus" className="rounded-full" />
              New Invoice
            </button>
          </div>
        </div>

        {/* Mapping over the data  */}
        {filteredData.map((d) => (
          <Link to={`/InvoiceDashboard/receipt/${d.id}`} key={d.id}>
            <div className="flex rounded-lg h-24 bg-white mt-4 justify-between dark:bg-[#1E2139] hover:border hover:border-[#7C5DFA] cursor-pointer">
              <div className="flex items-center">
                <span className="font-bold mr-12 ml-8">
                  <span className="text-slate-500">#</span>
                  {d.id}
                </span>
                <span className="text-slate-500 mr-12">{d.createdAt}</span>
                <span className="text-slate-500">{d.clientName}</span>
              </div>

              {/* right side  */}
              <div className="flex items-center">
                <span className="font-bold text-xl mr-12">£ {d.total}</span>
                <div
                  className={`dark:bg-opacity-5 font-semibold rounded-lg flex items-center justify-center w-20 p-0.5 mr-12 ${
                    statusColors[d.status]
                  } ${d.status === "draft" ? "dark:text-white" : ""}`}
                >
                  <span className="text-3xl">•</span> {d.status}
                </div>
                <img src={rightArrow} alt=">" className="mr-8" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InvoiceDashboard;