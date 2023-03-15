import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Shopping } from "./components/Shopping";

export function App() {
  const divStyle = {
    backgroundColor: "#F0F4F5"
  }
  return (
    <div className="row"  style={divStyle}>
      <div className="col-12 col-lg-8">
        <Header />
        <Menu />
        <Footer />
      </div>
      <div className="col-4">
        <Shopping />
      </div>
    </div>
  )
}
