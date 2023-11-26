import React, { useState } from "react";
import ItemList from "./ItemList";

const FoodCategory = (props) => {
  const { title, itemCards } = props.menuData;
  
  // console.log(props.menuData);

  // console.log(title);
  // console.log(itemCards);
  // const [showItems, setShowItems] = useState(false);
  // const {showItems} = props.showItems;
  // console.log(props.showItems);
  const toggleAccordion = () => {
    // console.log("togggllee");
    // setShowItems(!showItems)
    props.setShowIndex()
    
  };

  return (
    <>
      <div className="acco-list">
        {/* accordion header */}
        <div className="acco-header" onClick={toggleAccordion} >
          <h3>
            {title} ({itemCards.length})
          </h3>
          {props.showItems ? <span>▲</span> :<span>▼</span>}
        </div>

        {/* accordion-body */}

        {props.showItems  && (
          <div className="acco-body">
            <ItemList items={itemCards} />
          </div>
        )}
      </div>
    </>
  );
};

export default FoodCategory;
