import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function Cart() {
  const { cartItems, addItemToCart, removeItemFromCart, clearCart, total } = useCart();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.checkout}>
          <Text style={{ fontSize: 24, fontFamily: "TenorSans" }}>Checkout</Text>
        </View>
      </View>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <>
            <CartItem item={item} />
          </>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle = {
          {
        }}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <View style={styles.total}>
          <Text style={{ fontSize: 12, color: "grey" }}>EST. TOTAL</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "orange" }}>{ formatter.format(total) }</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback>
            <Text style={{ fontSize: 24 , color: "white"}}>Checkout</Text>
          </TouchableWithoutFeedback>
          <Ionicons name="bag-outline" size={24} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  checkout: {
    justifyContent: "center",
  },
  options: {
    flexDirection: "row",
    width: 100,
    height: "10%",
    justifyContent: "flex-end",
  },
  footer: {
    flexDirection: "column",
    
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "black",
    width: "120%",
    alignSelf: "center",

  }
});
