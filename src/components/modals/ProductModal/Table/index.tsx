import { Counter } from '../../../Counter'
import './style.css'

interface TableProps {
    category_id: number,
    price: number
}

export function Table(props: TableProps) {

    const formattedPrice = props.price.toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <table className="table table-borderless table-response modalTable mt-3">
            <thead>
                <tr>
                    <th scope="col">Produto</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Quantidade</th>
                </tr>
            </thead>
            {props.category_id == 1 ? <tbody>
                <tr>
                    <td scope="row">Hambúrguer tradicional</td>
                    <td>{formattedPrice}</td>
                    <td><Counter/></td>
                </tr>
                <tr>
                    <td scope="row">Hambúrguer artesanal</td>
                    <td>{formattedPrice}</td>
                    <td><Counter/></td>
                </tr>
                <tr>
                    <td scope="row">Hambúrguer vegetariano</td>
                    <td>{formattedPrice}</td>
                    <td><Counter/></td>
                </tr>
                <tr>
                    <td scope="row">Hambúrguer vegano</td>
                    <td>{formattedPrice}</td>
                    <td><Counter/></td>
                </tr>
            </tbody>

            : props.category_id == 2 ? <tbody>
            <tr>
                <td scope="row">Coca c/gelo</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Coca sem gelo</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Coca zero c/gelo</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Coca zero sem gelo</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
        </tbody>

        : props.category_id == 3 ? <tbody>
            <tr>
                <td scope="row">Calabresa</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Sensação</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Frango c/catupiry</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Calabresa c/bacon</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
        </tbody>

        : props.category_id == 4 ? <tbody>
            <tr>
                <td scope="row">Hambúrguer tradicional</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Hambúrguer artesanal</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Hambúrguer vegetariano</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Hambúrguer vegano</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
        </tbody>

        : props.category_id == 5 ? <tbody>
            <tr>
                <td scope="row">Laranja</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Abacaxi</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Morango</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Manga</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
        </tbody>

        : props.category_id == 6 ? <tbody>
            <tr>
                <td scope="row">Açaí pura</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Açaí com frutas</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Açaí com doces</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
            <tr>
                <td scope="row">Açaí com frutas e doces</td>
                <td>{formattedPrice}</td>
                <td><Counter/></td>
            </tr>
        </tbody>
        : null
            }
        </table>
    )
}