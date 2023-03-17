import { useCallback, useContext, useEffect, useState } from "react"
import { ModalDataContext } from "../../contexts/ModalDataContext"
import "./style.css"

interface ProductType {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    category_id: number
}

interface CardProps {
    product: ProductType
}

export function Card(props: CardProps) {

    const { modalData, setModalData } = useContext(ModalDataContext)
    const [selectedProduct, setSelectedProduct] = useState({})

    return (
        <>
            <div className="card col-5 col-sm-3 col-md-2 d-block p-0" >
                <a data-bs-toggle="modal" data-bs-target="#productModal" onClick={() => {setModalData(props.product); setSelectedProduct(props.product)}}>
                    <img src={props.product.image} className="card-img-top" alt={props.product.name} />
                    <div className="card-body text-center py-0 px-1 d-flex justify-content-center align-items-center">
                        <span className="card-title m-0">{props.product.name}</span>
                    </div>
                </a>
            </div>
        </>
    )
}