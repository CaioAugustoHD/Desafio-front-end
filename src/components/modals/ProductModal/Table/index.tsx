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
                    <td id="1.1" scope="row">Hambúrguer tradicional</td>
                    <td>{formattedPrice}</td>
                    <td><Counter product={newProduct}/></td>
                </tr>
                <tr>
                    <td id="1.2" scope="row">Hambúrguer artesanal</td>
                    <td>{formattedPrice}</td>
                    <td><Counter product={newProduct}/></td>
                </tr>
                <tr>
                    <td id="1.3" scope="row">Hambúrguer vegetariano</td>
                    <td>{formattedPrice}</td>
                    <td><Counter product={newProduct}/></td>
                </tr>
                <tr>
                    <td id="1.4" scope="row">Hambúrguer vegano</td>
                    <td>{formattedPrice}</td>
                    <td><Counter product={newProduct}/></td>
                </tr>
            </tbody>

            : props.product.category_id == 2 ? <tbody>
            <tr>
                <td id="2.1" scope="row">Coca c/gelo</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td id="2.2" scope="row">Coca sem gelo</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td id="2.3" scope="row">Coca zero c/gelo</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td  id="2.4" scope="row">Coca zero sem gelo</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
        </tbody>

        : props.product.category_id == 3 ? <tbody>
            <tr>
                <td id="3.1" scope="row">Calabresa</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td id="3.2" scope="row">Sensação</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td  id="3.3" scope="row">Frango c/catupiry</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td id="3.4" scope="row">Calabresa c/bacon</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
        </tbody>

        : props.product.category_id == 4 ? <tbody>
            <tr>
                <td id="4.1" scope="row">Hambúrguer tradicional</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td id="4.2" scope="row">Hambúrguer artesanal</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td id="4.3" scope="row">Hambúrguer vegetariano</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td id="4.4" scope="row">Hambúrguer vegano</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
        </tbody>

        : props.product.category_id == 5 ? <tbody>
            <tr>
                <td id="5.1" scope="row">Laranja</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td id="5.2" scope="row">Abacaxi</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td id="5.3" scope="row">Morango</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
            <tr>
                <td id="5.4" scope="row">Manga</td>
                <td>{formattedPrice}</td>
                <td><Counter product={newProduct}/></td>
            </tr>
        </tbody>

        : props.product.category_id == 6 ? <tbody>
            <tr>
                <td id="6.1" scope="row">Açaí pura</td>
                <td>{formattedPrice}</td>
                <td><Counter  product={newProduct}/></td>
            </tr>
            <tr>
                <td id="6.2" scope="row">Açaí com frutas</td>
                <td>{formattedPrice}</td>
                <td><Counter  product={newProduct}/></td>
            </tr>
            <tr>
                <td id="6.3" scope="row">Açaí com doces</td>
                <td>{formattedPrice}</td>
                <td><Counter  product={newProduct}/></td>
            </tr>
            <tr>
                <td id="6.4" scope="row">Açaí com frutas e doces</td>
                <td>{formattedPrice}</td>
                <td><Counter  product={newProduct}/></td>
            </tr>
        </tbody>
        : null
            }
        </table>
    )
}