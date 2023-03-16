import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Shopping } from "./components/Shopping";

export function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  const divStyle = {
    backgroundColor: "#F0F4F5"
  }

  useEffect(() => {
    window
    .matchMedia("(min-width: 992px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div className="row h-100"  style={divStyle}>
      <div className="col-12 col-lg-8 pe-0 d-flex flex-column justify-content-between">
        <Header />
        <Menu />
        <Footer />
      </div>
      {matches ?
        <div className="col-4 ps-0 bg-white h-100">
          <Shopping />
        </div>
        : <Shopping />
      }
    </div>
  )
}
