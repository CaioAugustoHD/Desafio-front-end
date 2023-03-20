import searchIcon from "../../assets/searchIcon.svg";
import cart from "../../assets/cart.svg";

interface HeaderProps {
  setSearchProducts: React.Dispatch<React.SetStateAction<string>>;
}

export function Header(props: HeaderProps) {
  const headerStyle = {
    height: "90px",
    boxShadow: "0 2.6px 7.25px rgba(0, 0, 0, .08) "
  };

  const inputStyle = {
    maxWidth: "330px",
    fontSize: "13px",
    border: "1px solid #D1D1D1"
  };

  const buttomStyle = {
    height: "37.1px",
    width: "48.1px"
  };

  function search() {
    const searchInput = document.querySelector(".searchInput");
    props.setSearchProducts(searchInput?.value);
  }

  return (
    <header
      className="container-fluid bg-white px-md-5 d-flex justify-content-between align-items-center border border-white"
      style={headerStyle}
    >
      <div className="d-flex align-items-center h-100 col-7" role="search">
        <input
          className="form-control searchInput rounded-0 rounded-start-1 py-2 px-3"
          onKeyUp={(e) => {
            e.code === "Enter" && search();
          }}
          style={inputStyle}
          type="text"
          placeholder="Pesquisar..."
          aria-label="Search"
        />
        <button
          className="btn btn-primary border-0 rounded-0 rounded-end-1 d-flex justify-content-center align-items-center"
          onClick={search}
          style={buttomStyle}
          type="button"
        >
          <img className="h-75" src={searchIcon} />
        </button>
      </div>
      <button
        className="btn btn-primary d-flex justify-content-center align-items-center d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive"
        style={buttomStyle}
      >
        <img className="h-100" src={cart} alt="Carrinho" />
      </button>
    </header>
  );
}
