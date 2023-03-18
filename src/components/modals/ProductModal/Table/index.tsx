import { Counter } from '../../../Counter'
import './style.css'

interface TableProps {
    product: {
        id: number,
        name: string,
        description: string,
        price: number,
        image: string,
        category_id: number
    }
}

export function Table(props: TableProps) {

    const formattedPrice = props.product.price.toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'
    })

    const newProduct = {
        id: props.product.id,
        name: props.product.name,
        price: props.product.price
    }
    
    return (
        <table className="table table-borderless table-response modalTable mt-3">
            <thead>
                <tr>
                    <th scope="col">Produto</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Quantidade</th>
                </tr>
            </thead>
            {props.product.category_id == 1 ? <tbody>
                <tr>
                    <td id="1.1" scope="row"><p>Hambúrguer tradicional</p></td>
                    <td>{formattedPrice}</td>
                    <td><Counter product={newProduct} isCart={false} /></td>
                </tr>
                <tr>
                    <td id="1.2" scope="row"><p>Hambúrguer artesanal</p></td>
                    <td>{formattedPrice}</td>
                    <td><Counter product={newProduct} isCart={false} /></td>
                </tr>
                <tr>
                    <td id="1.3" scope="row"><p>Hambúrguer vegetariano</p></td>
                    <td>{formattedPrice}</td>
                    <td><Counter product={newProduct} isCart={false} /></td>
                </tr>
                <tr>
                    <td id="1.4" scope="row"><p>Hambúrguer vegano</p></td>
                    <td>{formattedPrice}</td>
                    <td><Counter product={newProduct} isCart={false} /></td>
                </tr>
            </tbody>

            : props.product.category_id == 2 ? <tbody>
            <tr>
                <td id="2.1" scope="row"><p>Coca c/gelo</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="2.2" scope="row"><p>Coca sem gelo</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="2.3" scope="row"><p>Coca zero c/gelo</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td  id="2.4" scope="row"><p>Coca zero sem gelo</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
        </tbody>

        : props.product.category_id == 3 ? <tbody>
            <tr>
                <td id="3.1" scope="row"><p>Calabresa</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="3.2" scope="row"><p>Sensação</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td  id="3.3" scope="row"><p>Frango c/catupiry</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="3.4" scope="row"><p>Calabresa c/bacon</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
        </tbody>

        : props.product.category_id == 4 ? <tbody>
            <tr>
                <td id="4.1" scope="row"><p>Hambúrguer tradicional</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="4.2" scope="row"><p>Hambúrguer artesanal</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="4.3" scope="row"><p>Hambúrguer vegetariano</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="4.4" scope="row"><p>Hambúrguer vegano</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
        </tbody>

        : props.product.category_id == 5 ? <tbody>
            <tr>
                <td id="5.1" scope="row"><p>Laranja</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="5.2" scope="row"><p>Abacaxi</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="5.3" scope="row"><p>Morango</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="5.4" scope="row"><p>Manga</p></td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct} isCart={false} /></td>
            </tr>
        </tbody>

        : props.product.category_id == 6 ? <tbody>
            <tr>
                <td id="6.1" scope="row"><p>Açaí pura</p></td>
                <td>{formattedPrice}</td>
                <td><Counter  product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="6.2" scope="row"><p>Açaí com frutas</p></td>
                <td>{formattedPrice}</td>
                <td><Counter  product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="6.3" scope="row"><p>Açaí com doces</p></td>
                <td>{formattedPrice}</td>
                <td><Counter  product={newProduct} isCart={false} /></td>
            </tr>
            <tr>
                <td id="6.4" scope="row"><p>Açaí com frutas e doces</p></td>
                <td>{formattedPrice}</td>
                <td><Counter  product={newProduct} isCart={false} /></td>
            </tr>
        </tbody>
        : null
            }
        </table>
    )
}