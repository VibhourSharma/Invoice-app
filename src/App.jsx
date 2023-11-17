import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Receipt from "./pages/Receipt";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InvoiceDashboard/receipt/:id" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
