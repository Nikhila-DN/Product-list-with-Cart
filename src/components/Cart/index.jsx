import React from "react";
import styles from "./cart.module.css";
import { useCartContext } from "../../context/CartContext";
// import emptyCartImg from "../../assets/images/illustration-empty-cart.svg";
import { CartItem } from "..";
// import carbonNeutralIcon from "../../assets/images/icon-carbon-neutral.svg";

const Cart = ({ setIsModalOpen }) => {
  const { cartItems, totalCartItemsCount, totalOrderPrice } = useCartContext();

  return (
    <div className={styles.cartContainer}>
      <h4 className={styles.heading}>Your Cart ({totalCartItemsCount})</h4>
      {!totalCartItemsCount ? (
        <div className={styles.emptyCartContainer}>
          <img
            src={"/assets/images/illustration-empty-cart.svg"}
            alt="empty cart"
            loading="lazy"
          />
          <p className={styles.emptyCartQuote}>
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))}
          <div className={styles.totalOrderPrice}>
            <p className={styles.orderTotalLabel}>Order Total</p>
            <p className={styles.totalPrice}>${totalOrderPrice.toFixed(2)}</p>
          </div>
          <div className={styles.message}>
            <img src={"/assets/images/icon-carbon-neutral.svg"} alt="carbon-neutral" loading="lazy" />
            <p>
              This is a <span className={styles.boldText}>carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button
            className={styles.confirmButton}
            onClick={() => setIsModalOpen(true)}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;