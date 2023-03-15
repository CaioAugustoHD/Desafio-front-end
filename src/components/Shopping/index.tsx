import logo from "../../assets/logo.svg"
import { ProductsTable } from "./ProductsTable"
import { Saldo } from "./Saldo"

export function Shopping() {

    return (
        <>
            <div className="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>
                <hr/>
                <div className="offcanvas-body d-flex flex-column align-items-center position-relative">
                    <img className="img-fluid w-75" src={logo} alt="Private Code" />
                    <ProductsTable />
                    <Saldo />
                </div>
            </div>


        </>
    )
}