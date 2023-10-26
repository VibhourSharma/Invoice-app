import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import data from "../Data";
import leftIcon from "../assets/icon-arrow-left.svg";
console.log(data);

const Receipt = () => {
  const { id } = useParams();
  const receiptData = data.find((item) => {
    return item.id === id;
  });

  const statusColors = {
    pending: "bg-orange-50 text-[#ff8f00]",
    paid: "bg-[#e7fff4] text-[#33D69F]",
    draft: "bg-gray-100 text-black",
  };

  return (
    <>
      <Navbar />
      <div className="dark:bg-[#141625] dark:text-white bg-[#F2F2F2] flex min-h-screen justify-center font-def tracking-tighter">
        <div className="m-20 w-1/2 flex flex-col">
          {/* Go back button */}

          <div className="flex items-center cursor-pointer w-20">
            <div className="flex items-center justify-center mr-4">
              <img src={leftIcon} alt="icon" className="w-full" />
            </div>
            <div className="flex items-center font-bold text-base">Go back</div>
          </div>

          {/* edit section */}

          <div className="mt-8 bg-white flex justify-between items-center p-8 rounded-lg dark:bg-[#1E2139]">
            <div className="flex justify-center items-center gap-4">
              <span className="text-slate-500">Status</span>
              <div
                className={`dark:bg-opacity-5 font-semibold rounded-lg flex items-center justify-center w-20 p-0.5 ${
                  statusColors[receiptData.status]
                } ${receiptData.status === "draft" ? "dark:text-white" : ""}`}
              >
                <div className="text-2xl">•</div> {receiptData.status}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 font-semibold text-sm">
              <button className="text-[#7C5DFA] bg-slate-50 h-12 w-20 rounded-3xl hover:bg-[#DFE3FA]">
                Edit
              </button>
              <button className="text-white bg-red-500 h-12 rounded-3xl w-24 hover:bg-red-400">
                Delete
              </button>
              <button className="bg-[#7C5DFA] text-white h-12 w-32 rounded-3xl hover:bg-[#8e72fc]">
                Mark as Paid
              </button>
            </div>
          </div>

          {/* Description section */}

          <div className="mt-8 bg-white flex flex-col justify-between items-center p-8 rounded-lg dark:bg-[#1E2139]">
            {/* part 1  */}
            <div className="w-full flex justify-between mb-8">
              <div>
                <div className="font-bold text-lg mb-2">{receiptData.id}</div>
                <div className="text-slate-500">{receiptData.description}</div>
              </div>
              <div className="flex flex-col text-slate-500">
                <span>{receiptData.clientAddress.street}</span>
                <span>{receiptData.clientAddress.city}</span>
                <span>{receiptData.clientAddress.postCode}</span>
                <span>{receiptData.clientAddress.country}</span>
              </div>
            </div>
            {/* part 2 */}
            <div className="w-full flex">
              <div className="mr-32">
                <div className="flex flex-col mb-8">
                  <span className="text-slate-500">Invoice Date</span>
                  <span className="font-bold text-xl">
                    {receiptData.createdAt}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500">Payment Due</span>
                  <span className="font-bold text-xl">
                    {receiptData.paymentDue}
                  </span>
                </div>
              </div>
              <div className="mr-32">
                <div className="flex flex-col mb-2">
                  <span className="text-slate-500">Bill to</span>
                  <span className="text-xl font-bold mb-4">
                    {receiptData.clientName}
                  </span>
                  <span className="text-slate-500">
                    {receiptData.senderAddress.street}
                  </span>
                  <span className="text-slate-500">
                    {receiptData.senderAddress.city}
                  </span>
                  <span className="text-slate-500">
                    {receiptData.senderAddress.country}
                  </span>
                  <span className="text-slate-500">
                    {receiptData.senderAddress.postCode}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500">Sent to</span>
                <span className="text-xl font-bold">
                  {receiptData.clientEmail}
                </span>
              </div>
            </div>
            {/* part-3 */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Receipt;
