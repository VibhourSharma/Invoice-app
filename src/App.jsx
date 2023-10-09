import Header from "./components/Header";
import InvoiceDashboard from "./components/InvoiceDashboard";
import data from "./Data";

const App = () => {
  return (
    <>
      <Header />
      <InvoiceDashboard data={data} />
    </>
  );
};

export default App;
