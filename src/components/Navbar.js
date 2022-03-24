import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ navCount }) => {
  return (
    <div className="navbar">
      <div className="brandname">BigCart</div>
      <div className="navcart">
        <FaShoppingCart className="carticon" />
        <div className="countdiv">{navCount}</div>
      </div>
    </div>
  );
};

export default Navbar;
