import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader";
import AdminSidebar from "./Components/AdminSidebar/AdminSidebar";
import Logo from "./Components/Logo/Logo";

const App = () => {
  const Transaction = lazy(() => import("./pages/Transaction"));
  const Customers = lazy(() => import("./pages/Customers"));
  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const Products = lazy(() => import("./pages/Products"));
  return (
    <div className="split">
      <div className="nav">
        <Logo />
        <AdminSidebar />
      </div>
      <div className="content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
