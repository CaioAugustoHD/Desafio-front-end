import logo from "../../assets/logo.svg"
import { FormModal } from "../modals/FormModal"
import { ProductsTable } from "./ProductsTable"
import { Saldo } from "./Saldo"

export function Shopping() {
    const offcanvasHeaderStyle = {
        height: "91px",
        color: "#EBEBEB",
        borderBottom: "1px solid #EBEBEB"
    }

    return (
        <>
            <div className="offcanvas-lg offcanvas-end  h-100" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header d-block ms-4" style={offcanvasHeaderStyle}>
                </div>            
                <div className="offcanvas-body d-flex flex-column align-items-center h-75 position-relative mt-4">
                    <img className="img-fluid w-75 mb-4" src={logo} alt="Private Code" />
                    <ProductsTable />
                    <Saldo />
                </div>
            </div>

            <FormModal />

        </>
    )
}