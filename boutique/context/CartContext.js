import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const loadCartFromStorage = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart'); 
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        } 
      } catch (error) {
        console.error('Failed to load cart from storage:', error);
      }
    };
  
    loadCartFromStorage();
  }, []);

  useEffect(() => {
    const saveCart = async (items) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(items))
    } catch (error) {
      console.error('Failed to save cart to storage:', error);
    }
  }
    saveCart(cartItems);
    setTotal(cartTotal());
  }, [cartItems]);



  function addItemToCart(newItem) {
    setCartItems((prevItems) => {
      // Check if prevItems is an array
      if (!Array.isArray(prevItems)) {
        return [newItem]; // Return an empty array or a suitable default value
      }

      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex >= 0) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  }

  function removeItemFromCart(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  function clearCart() {
    setCartItems([]);
  }

  function increaseQuantity(itemId) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(itemId) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  }

  const cartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    setCartItems,
    increaseQuantity,
    decreaseQuantity,
    total,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
