import logo from "../../assets/logo.svg";
import { FormModal } from "../modals/FormModal";
import { ProductsTable } from "./ProductsTable";

export function Shopping() {
  const offcanvasHeaderStyle = {
    height: "91px",
    color: "#EBEBEB",
    borderBottom: "1px solid #EBEBEB"
  };

  return (
    <>
      <div
        className="offcanvas-lg offcanvas-end  h-100 p-0"
        tabIndex={-1}
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div
          className="offcanvas-header d-block ms-4"
          style={offcanvasHeaderStyle}
        ></div>
        <div
          className="offcanvas-body d-flex flex-column pt-4 px-0 align-items-center overflow-auto"
          style={{ height: "calc(100% - 91px)" }}
        >
          <img className="img-fluid w-75 mb-4" src={logo} alt="Private Code" />
          <ProductsTable />
        </div>
      </div>

      <FormModal />
    </>
  );
}
