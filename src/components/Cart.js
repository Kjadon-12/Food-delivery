import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItemFromCart, updateItemQuantity } from "../customHooks/cartSlice";
import EmptyCart from "./EmptyCart";




const Cart = ()=>{

    const cartItems = useSelector((store) => store.cart.items);
    const handleQuantityChange = (itemId, operation) => {
        const itemToUpdate = cartItems.find((item) => item.id === itemId);
    
        if (itemToUpdate) {
          const newQuantity = operation === "increment" ? itemToUpdate.quantity + 1 : itemToUpdate.quantity - 1;
    
          if(newQuantity<=0){
            dispatch(removeItemFromCart({itemId}))
            return;
          }
          dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
        }
          
        
      };       
        
      
    
    const cartItms = useSelector((store)=>store.cart.items)
    console.log(cartItms)
    const dispatch = useDispatch()

    const clrCart = ()=>{
        dispatch(clearCart())
         
    }

    const totalToPay = cartItms.reduce((total, item) => (
        total + (item.price || item.defaultPrice) / 100 * item.quantity
    ), 0);
    return(
        <>

        {cartItms.length === 0 ? <EmptyCart/> : (
        <div style={{backgroundColor:"#4e4a4a33" , paddingBottom:"30px"}}>
            
            <div className="clrCart-btn">
            <button  onClick={clrCart}> Clear Cart</button>
            
        </div>
            <div className="cart-main">
            <div className="account-details">
                <div className="account">
                    <div><h4>Account</h4>
                    <p>To place your order now, log in to your existing account or sign up</p>
                    <button>Have an Account? <p>Login</p></button> <button>New to Swiggy? <p>Sign up</p></button>
                    </div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"></img>
                </div>
                <div className="account" style={{height:"16%"}}>Delivery Address</div>
                <div className="account" style={{height:"16%"}}>Payment</div>
            </div>
            <div className="order-details">
               <h1>{cartItms[0]?.restroName}</h1>
               <h6>{cartItms[0]?.areaName}</h6>
               <div className="cart-details-cont">
                {cartItms.map((itm)=>(
                  
                   <div key={itm.id} className="cart-details">
                  {itm?.isVeg === 1 ? (
                  <p>🟢</p>
                ) : (
                    <p>🔴</p>
                )}
                       <h4 style={{width: "32%"}}>{itm.name}</h4>
                          <div className="quant-btn">
                    <span
                      onClick={() => {
                        console.log("decrement")
                       handleQuantityChange(itm.id, "decrement");
                      }}
                    >
                      -
                    </span>
                    <span>
                      {
                        
                          itm.quantity
                      }
                    </span>{" "}
                    <span
                      onClick={() => {
                        
                       handleQuantityChange(itm.id, "increment");
                      }}
                    >
                      +
                    </span>
                  </div>

                  <p style={{width: "14%"}}>₹{(itm?.price/100 || itm?.defaultPrice/100) * itm.quantity}</p> 
                        
                  </div>
                ))}
            </div>
             <hr/>
            <div className="total-pay">
                            <h3>TO PAY</h3>
                            <h3>₹{totalToPay.toFixed(2)}</h3>
                        </div>
            
            </div>

        </div>
        </div>)}
       
        
        </>
    )
}

export default Cart;