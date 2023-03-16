import { useEffect, useState } from "react"
import products from "../../../products.json"
import { Card } from "./Card"

export function ProductsCard() {
    const [matchesMD, setMatchesMD] = useState(
        window.matchMedia("(min-width: 768px)").matches
    );

    const [matchesSM, setMatchesSM] = useState(
        window.matchMedia("(min-width: 576px)").matches
    );
    
    const [currentPage, setCurrentPage] = useState(0)
    console.log(currentPage)
    
    const itensPerPage = matchesMD ? 5 : matchesSM ? 4 : 2
    const pages = Math.ceil(products.products.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = products.products.slice(startIndex, endIndex)

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatchesMD(e.matches));
    }, []);

    useEffect(() => {
        window
            .matchMedia("(min-width: 576px)")
            .addEventListener('change', e => setMatchesSM(e.matches));
    }, []);

    return (
        <section className="col-11 m-auto mt-4 row justify-content-around justify-content-sm-between">
            {currentItens.map((product) => {
                return <Card key={product.id} product={product} />
            })}

            <div aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" aria-label="Previous" disabled={currentPage == 0} onClick={() => setCurrentPage(currentPage - 1)}>&laquo;</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" aria-label="Next" disabled={currentPage + 1 == pages} onClick={() => setCurrentPage(currentPage + 1)}>&raquo;</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}