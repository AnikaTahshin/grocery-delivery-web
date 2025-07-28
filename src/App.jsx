import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppContextProvider, useAppContext } from "./context/AppContext";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AllProducts from "./pages/AllProducts";

const AppContent = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin } = useAppContext();

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin && <Login />}
      <Toaster />
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />

        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
};

export default App;
