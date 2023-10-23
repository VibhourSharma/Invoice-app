import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import data from "../Data";
console.log(data);

const Receipt = () => {
  const { id } = useParams();
  const receiptData = data.filter((item) => {
    return item.id === id;
  });

  const receiptDataD = receiptData[0];

  return (
    <>
      <Navbar />
      <div className="dark:bg-[#141625] dark:text-white bg-[#F2F2F2] flex min-h-screen justify-center font-def tracking-tighter">
        <h2>Receipt ID: {receiptDataD.id}</h2>
        <p>Name: {receiptDataD.clientName}</p>
        {/* <p>Description: {receiptData.description}</p> */}
      </div>
    </>
  );
};

export default Receipt;

// clientAddress
// :
// city
// :
// "Sharrington"
// country
// :
// "United Kingdom"
// postCode
// :
// "NR24 5WQ"
// street
// :
// "106 Kendell Street"
// [[Prototype]]
// :
// Object
// clientEmail
// :
// "jensenh@mail.com"
// clientName
// :
// "Jensen Huang"
// createdAt
// :
// "2021-8-18"
// description
// :
// "Re-branding"
// id
// :
// "RT3080"
// items
// :
// Array(1)
// 0
// :
// {name: 'Brand Guidelines', quantity: 1, price: 1800.9, total: 1800.9}
// length
// :
// 1
// [[Prototype]]
// :
// Array(0)
// paymentDue
// :
// "2021-8-19"
// paymentTerms
// :
// 1
// senderAddress
// :
// city
// :
// "London"
// country
// :
// "United Kingdom"
// postCode
// :
// "E1 3EZ"
// street
// :
// "19 Union Terrace"
// [[Prototype]]
// :
// Object
// status
// :
// "paid"
// total
// :
// 1800.9
