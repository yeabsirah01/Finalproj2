import HeaderMegaMenu from "./header";
import { Route, Routes } from "react-router-dom";
import HeroImageRight from "./HeroHeader";
import ProductPage from "./productsPage";
import Login from "./Login";

function MainApp() {
  const isLoggedIn = true;

  return (
    <>
      <HeaderMegaMenu isLoggedIn={isLoggedIn} />
      <>
        <Routes>
          {/* <Route path="/" element={<HeroImageRight />} /> */}
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </>
    </>
  );
}

export default MainApp;
