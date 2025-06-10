import "./App.css";
import { lazy, useContext, useEffect, useState, Suspense } from "react";
import { Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/javascript/Navbar";
import ScrollTop from "./Components/javascript/ScrollTop";

const HeroBanners = lazy(() => import("./Components/javascript/HeroBanners"));
const HomeProducts = lazy(() => import("./Components/javascript/HomeProducts"));
const ProductCategories = lazy(() =>import("./Components/javascript/ProductCategories"));
const ProductDetail = lazy(() =>import("./Components/javascript/ProductDetail"));
const AddToCart = lazy(()=> import('./Components/javascript/AddToCart'))
const Footer = lazy(() => import("./Components/javascript/Footer"));

function App() {
  const [loading, setloading] = useState(false);

  return (
    <>
      <Suspense fallback={loading}>
        <Navbar />
        <Routes>
          <Route path="/BIGCOMMERCE" element={
              <>
                <HeroBanners/>
                <HomeProducts/>
              </>
            }/>
          <Route path="BIGCOMMERCE/:type" element={<ProductCategories />}/>
          <Route path="BIGCOMMERCE/ProductDetail/:id" element={<ProductDetail />} />
          <Route exact path="BIGCOMMERCE/cart" element={<AddToCart />} />

        </Routes>
        <ScrollTop />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
