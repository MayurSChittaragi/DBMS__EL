import React from "react";
import { Link } from "react-router-dom";
import CartItems from "../../components/Cart/CartItems";

function Cart() {
  return (
    <div>
      <div className="bg-[#091540]  text-7xl m-5 rounded-lg flex flex-row p-4 mx-10 text-[#F8F7F9] drop-shadow-2xl">
        <Link to="/home">
          <div className="ml-20">NFT Marketplace</div>
        </Link>
      </div>
      <div>
        <CartItems />
      </div>
    </div>
  );
}

export default Cart;
