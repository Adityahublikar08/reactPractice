import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Account from "./Accounts/Account";
import Orders from "./Orders";

import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import "../index.css";

function Website() {
  return (
    <div className="app-container">
      <Nav />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default Website;
