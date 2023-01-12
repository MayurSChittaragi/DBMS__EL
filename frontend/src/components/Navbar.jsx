import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  // const [data, setData] = useState([]);
  // console.log("cnubvurbv", data.posts.length);
  const info = useSelector((state) => state.post);
  const num = info.posts.filter((post) => post.addCart === true);

  // useEffect(() => {
  //   // console.log(num, "num");
  //   console.log("helo");
  // }, [info]);

  return (
    <div className="bg-[#091540]  text-7xl m-5 rounded-lg flex flex-row p-4 mx-10 text-[#F8F7F9] drop-shadow-2xl">
      <div>NFT Marketplace</div>
      <Link to="/cart">
        <div className="scale-150 absolute right-20 top-10 flex flex-row cursor-pointer">
          <Link to="/home">
            <div className="text-lg mx-2 mr-5">Logout</div>
          </Link>
          <div className="text-lg mx-2">Your cart</div>
          <ShoppingCartIcon />
          <div className="mx-2 text-xl">{num.length}</div>
          {/* <div className="mx-2 text-xl">0</div> */}
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
