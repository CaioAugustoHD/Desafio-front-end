import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Counter } from "../../Counter"
import "./style.css"

export function ProductsTable() {
    const { cartProducts, format } = useContext(CartContext)

    return (
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
                    return <tr>
                        <td scope="row">
                            <p>{product.name}</p>
                            {product.details}
                        </td>
                        <td>{format(product.price)}</td>
                        <td><Counter product={product} /></td>
                        <td>40</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}