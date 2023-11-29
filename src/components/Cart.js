import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../customHooks/cartSlice";



const Cart = ()=>{
    const cartItms = useSelector((store)=>store.cart.items)
    console.log(cartItms)
    const dispatch = useDispatch()

    const clrCart = ()=>{
          dispatch(clearCart())
    }
    return(
        <>
        <div>
            <button onClick={clrCart}> Clear Cart</button>
            <ul>
                {cartItms.map((itm)=>(
                    <li key={itm.id}>{itm.name}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Cart;