import { Link } from "react-router-dom";



const EmptyCart = ()=>{
    
    console.log("EmptyCart")
  return(
    <div className="empty-cart">
        <img src="https://cdn.dineorder.com/public/asset/img/cook.png"></img>
        <h3>Your cart is empty</h3>
        <p>You can go to home page to view more restaurants</p>
      <Link to="/"><button>SEE RESTAURANTS NEAR YOU</button></Link>  
    </div>
  )
}
export default EmptyCart;