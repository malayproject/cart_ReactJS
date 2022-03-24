import React from "react";
import Item from "./Item";

const Items = ({ itemsData }) => {
  return (
    <div className="itemscontainer">
      {itemsData.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            // itemCountHandler={itemCountHandler}
            // removeItemHandler={removeItemHandler}
          />
        );
      })}
    </div>
  );
};

export default Items;
