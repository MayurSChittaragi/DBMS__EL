import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "./Reducers/postSlice";
import Auth from "./pages/Auth/Auth";
import Register from "./pages/Auth/Register";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import { fetchusers } from "./Reducers/userSlice";

function App() {
  const [user, setLoginUser] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchposts());
    // dispatch(fetchusers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);

  const data = useSelector((state) => state.post);
  // console.log("vbibvibvie", data);

  return (
    <div>
      <Routes>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} /> */}

        <Route
          exact
          path="/"
          element={
            user && user._id ? <Home /> : <Auth setLoginUser={setLoginUser} />
          }
        />
        <Route path="/login" element={<Auth setLoginUser={setLoginUser} />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/register"
          element={<Register setLoginUser={setLoginUser} />}
        />
      </Routes>

      {/* <Home /> */}
    </div>
  );
}

export default App;
