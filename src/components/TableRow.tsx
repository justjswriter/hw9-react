import {FC } from 'react'
import { IProducts } from '../types'
import DeleteLine from './DeleteLine'
import EditLine from './EditLine'

const TableRow :FC<IProducts> = (props) => {
    return(
        <tr>
            <td>{props.productName}</td>
            <td>{props.productPrice}</td>
            <td>{props.productAmount}</td>
            <td><DeleteLine id={props.id}/> / <EditLine id={props.id}/></td>
        </tr>
    )
}

export default TableRow