import React from "react";
import { ITM_IMG } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { addItems, updateItemQuantity , removeItemFromCart} from "../customHooks/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const addItemsCart = (itemInfo) => {
    console.log(itemInfo);

    //dispatch action
    dispatch(addItems({ ...itemInfo, quantity: 1 }));
  };

  const handleQuantityChange = (itemId, operation) => {
    const itemToUpdate = cartItems.find((item) => item.id === itemId);

    if (itemToUpdate) {
      const newQuantity = operation === "increment" ? itemToUpdate.quantity + 1 : itemToUpdate.quantity - 1;

      if(newQuantity<0){
        removeItemFromCart(itemToUpdate)
        return;
      }
      dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
    }
      
    
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <div>
        {items.map((itm) => (
          <div key={itm.card.info.id}>
            <div className="item-menu">
              <div className="item-menu1">
                {itm?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                  <p>🔴</p>
                ) : (
                  <p>🟢</p>
                )}
                <h2>{itm.card.info.name} </h2>
                <h3>
                  ₹
                  {itm.card.info.price / 100 ||
                    itm.card.info.defaultPrice / 100}{" "}
                </h3>
                <h4 className="description">{itm.card.info.description}</h4>
              </div>
              <div>
                <img src={ITM_IMG + itm.card.info.imageId}></img>
                {cartItems.filter((item) => item.id === itm.card.info.id)
                  .length > 0 ? (
                  <div className="toggle-add-btn">
                    <span
                      onClick={() => {
                        handleQuantityChange(itm.card.info.id, "decrement");
                      }}
                    >
                      -
                    </span>
                    <span>
                      {
                        cartItems.find((item) => item.id === itm.card.info.id)
                          .quantity
                      }
                    </span>{" "}
                    <span
                      onClick={() => {
                        handleQuantityChange(itm.card.info.id, "increment");
                      }}
                    >
                      +
                    </span>
                  </div>
                ) : (
                  <button
                    className="add-btn"
                    onClick={() => addItemsCart(itm.card.info)}
                  >
                    ADD
                  </button>
                )}
              </div>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
