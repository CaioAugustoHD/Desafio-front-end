import { useState } from "react";
import { ModalDataProvider } from "../contexts/ModalDataContext";
import { ProductsCard } from "../ProductsCard";
import { NavBar } from "./NavBar";

export function Menu() {

    const [productsCategory, setProductsCategory] = useState(0)

    return (
        <main className="pt-4 position-relative" style={{minHeight: "calc(100% - 175px)"}}>
            <NavBar setProductsCategory={setProductsCategory}/>
            <ModalDataProvider>
                <ProductsCard productsCategory={productsCategory} />
            </ModalDataProvider>
        </main>
    )
}