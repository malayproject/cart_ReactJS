import React from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { RemoveConsumer, CountConsumer } from "./UserContext";

const Item = ({ item }) => {
  return (
    <div className="itemcontainer">
      <div className="imagecon">
        <img src={item.img} alt="image" className="image"></img>
        {console.log(item.img)}
      </div>
      <div className="desccon">
        <div className="title">{item.title}</div>
        <div className="price">&#x20b9;{item.price}</div>
        <RemoveConsumer>
          {(removeItemHandler) => {
            return (
              <div
                className="remove"
                onClick={(e) => removeItemHandler(item.id, e)}
              >
                remove
              </div>
            );
          }}
        </RemoveConsumer>
      </div>
      <CountConsumer>
        {(itemCountHandler) => {
          return (
            <div className="countcontrolcon">
              <RiArrowUpSLine
                className="arrow up"
                onClick={(e) => itemCountHandler(item.id, true)}
              />
              <span className="itemcount">{item.count}</span>
              <RiArrowDownSLine
                className="arrow down"
                onClick={(e) => itemCountHandler(item.id, false)}
              />
            </div>
          );
        }}
      </CountConsumer>
    </div>
  );
};

export default Item;
