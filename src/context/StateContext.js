import React, { createContext, useContext, useState } from 'react';
// import { toast } from "react-hot-toast";

const Context = createContext()

const StateContext = ({children}) => {
      const [showCart, setShowCart] = useState(false);
      const [cartItems, setCartItems] = useState([]);
      const [totalPrice, setTotalPrice] = useState(0);
      const [totalQuantities, setTotalQuantities] = useState(0);

      let foundProduct;
      let index;

      const onAdd = (product, quantity) => {
        // console.log(product.price.slice(1, -1));
        const checkProductInCart = cartItems.find(
          (item) => item.isbn13 === product.isbn13
        );
        setTotalPrice(
          (prevTotalPrice) =>
            prevTotalPrice + product.price * quantity
        );
        setTotalQuantities(
          (prevTotalQuantities) => prevTotalQuantities + quantity
        );
        if (checkProductInCart) {
          const updatedCartItem = cartItems.map((cartProduct) => {
            if (cartProduct.isbn13 === product.isbn13)
              return {
                ...cartProduct,
                quantity: cartProduct.quantity + quantity,
              };
          });
          setCartItems(updatedCartItem);
        } else {
          product.quantity = quantity;
          setCartItems([...cartItems, { ...product }]);
        }
        // toast.success(`${product.title} added to the cart.`);
      };
      const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item.isbn13 === product.isbn13);
        const newCartItems = cartItems.filter(
          (item) => item.isbn13 !== product.isbn13
        );

        setTotalPrice(
          (prevTotalPrice) =>
            prevTotalPrice -
            foundProduct.price * foundProduct.quantity
        );
        setTotalQuantities(
          (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
        );
        setCartItems(newCartItems);
      };

      const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item.isbn13 === id);
        index = cartItems.findIndex((product) => product.isbn13 === id);
        const newCartItems = cartItems.filter((item) => item.isbn13 !== id);

        if (value === "inc") {
          setCartItems([
            ...newCartItems,
            { ...foundProduct, quantity: foundProduct.quantity + 1 },
          ]);
          setTotalPrice(
            (prevTotalPrice) =>
              prevTotalPrice + parseFloat(foundProduct.price.slice(1, -1))
          );
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
        } else if (value === "dec") {
          if (foundProduct.quantity > 1) {
            setCartItems([
              ...newCartItems,
              { ...foundProduct, quantity: foundProduct.quantity - 1 },
            ]);
            setTotalPrice(
              (prevTotalPrice) =>
                prevTotalPrice - parseFloat(foundProduct.price.slice(1, -1))
            );
            setTotalQuantities(
              (prevTotalQuantities) => prevTotalQuantities - 1
            );
          }
        }
      };


    const value = {
      showCart,
      cartItems,
      totalPrice,
      totalQuantities,
      onRemove,
      onAdd,
      setShowCart,
      toggleCartItemQuantity,
    };
    return (
        <Context.Provider value={value}>{children}</Context.Provider>
    );
};

export default StateContext;

export const useStateContext = () => useContext(Context);