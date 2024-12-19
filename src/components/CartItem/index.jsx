import React from "react";
import styles from "./cartItem.module.css";
import { useCartContext } from "../../context/CartContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

 const CartItem = ({ cartItem }) => {
  const { handleRemoveCartItem } = useCartContext();

  return (
    <div className={styles.cartItemContainer}>
      <div>
        <p className={styles.itemName}>{cartItem.name}</p>
        <div className={styles.priceContainer}>
          <p className={styles.quantity}>{cartItem.quantity}x</p>
          <p className={styles.price}>@ ${cartItem.price.toFixed(2)}</p>
          <p className={styles.totalPrice}>
            ${(cartItem.price * cartItem.quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <AiOutlineCloseCircle
        size={20}
        className={styles.removeIcon}
        onClick={() => handleRemoveCartItem(cartItem.name)}
      />
    </div>
  );
};

export default CartItem;