import React, { useRef, useEffect } from "react";
import ItemList from "./ItemList";

const FoodCategory = (props) => {
  const { title, itemCards } = props.menuData;

  const contentRef = useRef(null);

  useEffect(() => {
    if (props.showItems) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else {
      // Scroll to the top of the page on initial render
      window.scrollTo({ top: 0, behavior: 'smooth'  });
    }
  }, [props.showItems]);
  
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
      <div className="acco-list" ref={contentRef}>
        {/* accordion header */}
        <div className="acco-header" onClick={toggleAccordion}  >
          <h3>
            {title} ({itemCards.length})
          </h3>
          {props.showItems ? <span>▲</span> :<span>▼</span>}
        </div>

        {/* accordion-body */}

        {props.showItems  && (
          <div className="acco-body" >
            <ItemList items={itemCards} />
          </div>
        )}
      </div>
    </>
  );
};

export default FoodCategory;
