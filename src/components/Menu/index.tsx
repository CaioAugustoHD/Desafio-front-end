import { ModalDataProvider } from "../contexts/ModalDataContext";
import { ProductsCard } from "../ProductsCard";
import { NavBar } from "./NavBar";

export function Menu() {
    return (
        <main className="pt-4 position-relative" style={{minHeight: "calc(100% - 175px)"}}>
            <NavBar />
            <ModalDataProvider>
                <ProductsCard />
            </ModalDataProvider>
        </main>
    )
}