import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Counter } from "../../Counter"
import { Saldo } from "./Saldo"
import "./style.css"

export function ProductsTable() {
    const { cartProducts, format } = useContext(CartContext)

    return (
        <div className="d-flex flex-column justify-content-between w-100" style={{height: "551px"}}>
        <table className="table shoppingTable table-striped">
            <thead className="border-top">
                <tr>
                    <th scope="col">Produto</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                {cartProducts.map(product => {
                    return <tr key={product.orderId+product.id}>
                        <td id={product.orderId.toString()} scope="row">
                            <p>{product.name}</p>
                            <p>{product.details}</p>
                        </td>
                        <td>{format(product.price)}</td>
                        <td><Counter cartProduct={product} isCart={true} /></td>
                        <td>{format(product.price * product.quantity)}</td>
                    </tr>
                })}
            </tbody>
        </table>
            <Saldo />
            </div>
    )
}