import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Shopping } from "./components/Shopping";

export function App() {
  const divStyle = {
    backgroundColor: "#F0F4F5"
  }
  return (
    <div className="row h-100"  style={divStyle}>
      <div className="col-12 col-lg-8 pe-0 d-flex flex-column justify-content-between">
        <Header />
        <Menu />
        <Footer />
      </div>
      <div className="col-4 ps-0 bg-white h-100">
        <Shopping />
      </div>
    </div>
  )
}
