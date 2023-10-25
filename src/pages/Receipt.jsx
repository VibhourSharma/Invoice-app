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

  return (
    <>
      <Navbar />
      <div className="dark:bg-[#141625] dark:text-white bg-[#F2F2F2] flex min-h-screen justify-center font-def tracking-tighter">
        <div className="m-20 w-1/2 flex flex-col">
          <div className="w-fit">
            <div className="flex items-center font-bold text-base">
              <div className="flex items-center justify-center mr-6">
                <img src={leftIcon} alt="icon" className="w-full" />
              </div>
              Go back
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Receipt;
