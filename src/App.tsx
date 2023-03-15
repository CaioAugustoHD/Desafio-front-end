import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Shopping } from "./components/Shopping";

export function App() {
  return (
    <div className="row">
      <div className="col-12 col-lg-8">
        <Header />
        <Menu />
      </div>
      <div className="col-4">
        <Shopping />
      </div>
    </div>

  )
}
