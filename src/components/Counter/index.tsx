import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"

interface CounterProps {
    product: {
        id: number,
        name: string,
        price: number
    }
}

//                   TIPAR FUNÇÃO
interface DataType {
    details: string,
    orderId: number,
    quantity: number
}

// const IDs = [1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 6.3, 6.4]

export function Counter(props: CounterProps) {

    const { addItemsToCart, removeItemsToCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)

    function productDetails(e) {
        const details = e.target.parentElement.parentElement.parentElement.children[0].textContent
        const orderId = e.target.parentElement.parentElement.parentElement.children[0].id
        const quantity = 0
        return {details, orderId, quantity}
    }

    useEffect(() => {
        setQuantity(0)
    },[props.product])

    return (
        <div>
            <button
                onClick={(e) => {
                    const data = productDetails(e)
                    const q = removeItemsToCart(Object.assign(props.product, data))
                    setQuantity(q)                 
                }}
                className="btn btn-sm p-0 rounded-circle"
                style={{
                    backgroundColor: "#D9D9D9",
                    color: "#696969",
                    alignItems: "center",
                    height: "22px",
                    width: "22px"
                }}
            >-</button>
            
            <span className="mx-2">
                {quantity}
            </span>

            <button
                onClick={(e) => {
                    const data = productDetails(e)
                    const q = addItemsToCart(Object.assign(props.product, data))
                    setQuantity(q)                  
                }}
                className="btn btn-sm btn-primary p-0 rounded-circle"
                style={{
                    color: "#FFF",
                    height: "22px",
                    width: "22px"
                }}
            >+</button>
        </div>
    )
}