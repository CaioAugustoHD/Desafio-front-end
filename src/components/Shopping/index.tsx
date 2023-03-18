import logo from "../../assets/logo.svg"
import { FormModal } from "../modals/FormModal"
import { ProductsTable } from "./ProductsTable"
import { Saldo } from "./Saldo"

export function Shopping() {
    const breakStyle = {
        marginTop: "90px",
        width: "92%",
        color: "#EBEBEB"
    }

    return (
        <>
            <div className="offcanvas-lg offcanvas-end  h-100" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-body d-flex flex-column align-items-center h-100 position-relative">
                    <hr style={breakStyle} className="mb-5 ms-lg-5"/>
                    <img className="img-fluid w-75 mb-4" src={logo} alt="Private Code" />
                    <ProductsTable />
                    <Saldo />
                </div>
            </div>

            <FormModal />

        </>
    )
}