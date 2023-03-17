import { Counter } from '../../../Counter'
import './style.css'

export function Table() {
    return (
        <table className="table table-borderless table-response modalTable mt-3">
            <thead>
                <tr>
                    <th scope="col">Produto</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">Calabresa</td>
                    <td>R$ 40,00</td>
                    <td><Counter/></td>
                </tr>
                <tr>
                    <td scope="row">Sensação</td>
                    <td>R$ 40,00</td>
                    <td><Counter/></td>
                </tr>
                <tr>
                    <td scope="row">Frango c/catupiry</td>
                    <td>R$ 40,00</td>
                    <td><Counter/></td>
                </tr>
                <tr>
                    <td scope="row">Calabresa c/bacon</td>
                    <td>R$ 40,00</td>
                    <td><Counter/></td>
                </tr>
            </tbody>
        </table>
    )
}