import { useAppDispatch } from "../hooks"
import {useState, FormEvent} from 'react'
import { addProduct } from "../Slices/productSlice"

const AddProduct = () => {
    const dispatch = useAppDispatch()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState("")

    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addProduct({productName: name,productAmount: parseInt(amount),productPrice: parseInt(price)  }));
      };

    return(
        <div>
            <p>Add product</p>
            <form onSubmit={handleClick}>
                <input placeholder="Product name" onChange={(e) => setName(e.target.value)}/>
                <input placeholder="Product price" onChange={(e) => setPrice(e.target.value)}/>
                <input placeholder="Product amount" onChange={(e) => setAmount(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddProduct