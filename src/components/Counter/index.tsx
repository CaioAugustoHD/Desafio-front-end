import { useContext } from "react"
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

export function Counter(props: CounterProps) {

    const { addItemsToCart, removeItemsToCart, cartProducts } = useContext(CartContext)

    function productDetails(e) {
        const details = e.target.parentElement.parentElement.parentElement.children[0].textContent
        const orderId = e.target.parentElement.parentElement.parentElement.children[0].id
        const quantity = 0
        return {details, orderId, quantity}
    }

    return (
        <div>
            <button
                onClick={(e) => {
                    const data = productDetails(e)
                    removeItemsToCart(Object.assign(props.product, data))                    
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
                0
            </span>

            <button
                onClick={(e) => {
                    const data = productDetails(e)
                    addItemsToCart(Object.assign(props.product, data))                    
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