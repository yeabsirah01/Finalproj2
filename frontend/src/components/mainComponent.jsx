import HeaderMegaMenu from "./header";
import { Route, Routes } from "react-router-dom";
import HeroImageRight from "./HeroHeader";
import ProductPage from "../pages/productsPage";
import Login from "./Login";
import { ShopContextProvidor } from "../context/shop-context";

function MainApp() {
  const isLoggedIn = true;

  return (
    <ShopContextProvidor>
      <HeaderMegaMenu isLoggedIn={isLoggedIn} />
      <>
        <Routes>
          {/* <Route path="/" element={<HeroImageRight />} /> */}
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </>
    </ShopContextProvidor>
  );
}

export default MainApp;
