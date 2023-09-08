import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity } from "../actions/cartActions";
import Navbar from "./Navbar";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="container mt-4">
        <h4>Your Cart</h4>
        {cartItems.map((item) => (
          <div key={item.title} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">Total: ${item.total}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                -
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => handleIncreaseQuantity(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
