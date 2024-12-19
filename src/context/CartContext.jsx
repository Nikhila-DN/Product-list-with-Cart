import { createContext, useContext, useState } from "react";
import data from "../../data.json";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) =>
    setCartItems([
      ...cartItems,
      {
        name: product.name,
        thumbnail: product.image.thumbnail,
        price: product.price,
        quantity: 1,
      },
    ]);

  const isProductInCart = (productName) =>
    cartItems.findIndex((item) => item.name === productName) !== -1;

  const getCartItem = (productName) =>
    cartItems.find((item) => item.name === productName);

  const incrementQuantity = (productName) =>
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.name === productName) item.quantity++;
        return item;
      })
    );

  const decrementQuantity = (productName) =>
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.name === productName && item.quantity > 1) item.quantity--;
        return item;
      })
    );

  const handleRemoveCartItem = (itemName) =>
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );

  const totalCartItemsCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalOrderPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <cartContext.Provider
      value={{
        products,
        cartItems,
        totalCartItemsCount,
        totalOrderPrice,
        setCartItems,
        addItemToCart,
        isProductInCart,
        getCartItem,
        incrementQuantity,
        decrementQuantity,
        handleRemoveCartItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCartContext must be called within CartProvider.");
  }
  return context;
};