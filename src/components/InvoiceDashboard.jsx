import Header from "./Header";
import InvoiceCard from "./InvoiceCard";

const InvoiceDashboard = ({ data }) => {
  console.log(data);
  return (
    <>
      <Header />
      <InvoiceCard data={data} />
    </>
  );
};

export default InvoiceDashboard;
