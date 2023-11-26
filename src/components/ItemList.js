import React from "react";
import { ITM_IMG } from "../utils";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <div>
        {items.map((itm) => (
          <div key={itm.card.info.id}>
            <div className="item-menu" >
              <div className="item-menu1">
                {itm.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
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
              <button className="add-btn">ADD</button>
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
