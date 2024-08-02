import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/productRedux";

export default function CartItem({
  title,
  rating,
  price,
  imageUrl,
  quantity,
  id,
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          onClick={() => {
            dispatch({ type: removeFromCart, payload: { id } });
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            dispatch({ type: addToCart, payload: { id } });
          }}
        >
          +
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
