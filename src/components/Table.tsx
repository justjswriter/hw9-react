import TableRow from "../components/TableRow"
import { useAppSelector } from "../hooks"

const Table = () => {
    const products = useAppSelector((state) => state.products.products)
    return(
        <div>
            <p>Table</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => <TableRow key={product.id} {...product}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table