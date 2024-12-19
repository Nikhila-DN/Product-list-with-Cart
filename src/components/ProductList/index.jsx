import React from "react";
import { Product } from "..";
import { useCartContext } from "../../context/CartContext";
import styles from "./productList.module.css";

const ProductList = () => {
  const { products } = useCartContext();

  return (
    <div className={styles.productListContainer}>
      <h2 className={styles.heading}>Desserts</h2>
      <div className={styles.productsContainer}>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;