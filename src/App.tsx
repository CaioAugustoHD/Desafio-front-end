import { useEffect, useState } from "react";
import { CartProvider } from "./components/contexts/CartContext";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Shopping } from "./components/Shopping";

export function App() {

  const [searchProducts, setSearchProducts] = useState('')

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 992px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <CartProvider>
      <div className="row h-100" style={{ backgroundColor: "#F0F4F5" }}>
        <div className="col-12 col-lg-8 pe-0 d-flex flex-column justify-content-between">
          <Header setSearchProducts={setSearchProducts} />
          <Menu searchProducts={searchProducts} />
          <Footer />
        </div>
        {matches ?
          <div className="col-4 ps-0 bg-white h-100">
            <Shopping />
          </div>
          : <Shopping />
        }
      </div>
    </CartProvider>
  )
}
