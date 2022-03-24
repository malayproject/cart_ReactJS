import React, { useState } from "react";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

const Landing = () => {
  const [navCount, setNavCount] = useState(0);
  const [isCartCleared, setIsCartCleared] = useState(false);

  const handleNavItemsCountChange = (tTotalCount) => {
    setNavCount(tTotalCount);
  };

  const handleClearBtnClick = () => {
    setIsCartCleared(true);
  };

  return (
    <div className="landing">
      <Navbar navCount={navCount} />
      {isCartCleared ? (
        <h2 className="emptytext">Your cart is EMPTY</h2>
      ) : (
        <CartContainer
          handleNavItemsCountChange={handleNavItemsCountChange}
          handleClearBtnClick={handleClearBtnClick}
        />
      )}
      <div className="footer"> </div>
    </div>
  );
};

export default Landing;
