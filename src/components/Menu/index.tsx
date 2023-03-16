import { ProductsCard } from "../ProductsCard";
import { NavBar } from "./NavBar";

export function Menu() {
    return (
        <main className="pt-4">
            <NavBar />
            <ProductsCard />
        </main>
    )
}