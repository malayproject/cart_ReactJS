import React, { useState, useEffect } from "react";
import Items from "./Items";
import itemsData from "./Data";
import { CountProvider, RemoveProvider } from "./UserContext";

const CartContainer = ({ handleNavItemsCountChange, handleClearBtnClick }) => {
  const initState = {
    totalCount: 0,
    totalPrice: 0,
    items: [],
    allItemsCleared: false,
  };
  const [states, setStates] = useState(initState);

  const itemCountHandler = (id, increment) => {
    console.log("itemCountHandler");
    // debugger;
    let tItems = states.items;
    tItems.map((item) => {
      if (item.id === id) {
        increment ? (item.count += 1) : (item.count -= 1);
      }
    });
    setStates((prev) => ({
      ...prev,
      items: tItems.filter((itm) => itm.count !== 0),
      totalCount: increment ? prev.totalCount + 1 : prev.totalCount - 1,
      totalPrice: increment
        ? Math.round(
            (prev.totalPrice + tItems.find((itm) => itm.id === id).price) * 100
          ) / 100
        : Math.round(
            (prev.totalPrice - tItems.find((itm) => itm.id === id).price) * 100
          ) / 100,
      allItemsCleared:
        prev.totalCount > 1
          ? prev.allItemsCleared
          : increment
          ? prev.allItemsCleared
          : true,
    }));
  };

  const removeItemHandler = (id, e) => {
    console.log(id, "removeItemHandler");
    let tItems = states.items;
    const found = tItems.find((itm) => itm.id === id);
    tItems = tItems.filter((itm) => itm.id !== id);
    setStates((prev) => ({
      ...prev,
      items: tItems,
      totalCount: prev.totalCount - found.count,
      totalPrice:
        Math.round((prev.totalPrice - found.count * found.price) * 100) / 100,
      allItemsCleared: prev.items.length === 1 ? true : false,
    }));
  };

  const handleClear = () => {
    setStates((prev) => ({
      ...prev,
      allItemsCleared: true,
      totalCount: 0,
      totalPrice: 0,
      items: [],
    }));
  };

  useEffect(() => {
    handleNavItemsCountChange(states.totalCount);
    if (states.totalCount === 0 && states.allItemsCleared)
      handleClearBtnClick();
  }, [states.totalCount, states.allItemsCleared]);

  useEffect(() => {
    let tTotalCount = 0;
    let tTotalPrice = 0;
    let tItems = [];
    itemsData.map((item) => {
      tTotalCount += item.count;
      tTotalPrice += item.price;
      tTotalPrice = Math.round(tTotalPrice * 100) / 100;
      tItems.push({
        id: item.id,
        title: item.title,
        img: item.img,
        price: item.price,
        count: item.count,
      });
    });
    setStates((prev) => {
      return {
        ...prev,
        totalCount: tTotalCount,
        totalPrice: tTotalPrice,
        items: tItems,
      };
    });
    handleNavItemsCountChange(tTotalCount);
  }, []);

  return (
    <div className="cartcontainer">
      <h2 className="heading">
        Your cart has <span className="totalcount">{states.totalCount}</span>{" "}
        items
      </h2>
      <CountProvider value={itemCountHandler}>
        <RemoveProvider value={removeItemHandler}>
          <Items
            itemsData={states.items}
            // itemCountHandler={itemCountHandler}
            //   removeItemHandler={removeItemHandler}
          />
        </RemoveProvider>
      </CountProvider>

      <div className="totalcontainer">
        <div>Total</div>
        <div>
          &#x20b9;<span className="totalamount">{states.totalPrice}</span>
        </div>
      </div>
      <button className="clearbtn" onClick={handleClear}>
        Clear Cart
      </button>
    </div>
  );
};

export default CartContainer;
