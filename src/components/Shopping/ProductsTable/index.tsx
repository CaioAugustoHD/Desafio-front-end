export function ProductsTable() {
    return (
        <table className="table table-striped">
            <thead className="border-top">
                <tr>
                    <th scope="col">Produto</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">
                        <p>Hamburguer</p>
                        <p>Sem pão</p>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td scope="row">
                        <p>Hamburguer</p>
                        <p>Sem pão</p>
                    </td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
        </table>
    )
}