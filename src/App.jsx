import InvoiceDashboard from "./components/InvoiceDashboard";
import data from "./Data";

const App = () => {
  return (
    <div>
      <InvoiceDashboard data={data} />
    </div>
  );
};

export default App;
