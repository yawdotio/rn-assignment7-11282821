import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useCart } from "../context/CartContext";


export default function CartItem({ item }) {
  const { removeItemFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="contain"
        resizeMethod="resize"
      />
      <View style={styles.details}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 , paddingLeft: 5}}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      </View>
      <View style={styles.cartControl}>
      <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
          <Image
            source={require("../assets/remove.png")}
            resizeMethod="scale"
            resizeMode="contain"
            style={styles.remove}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    maxWidth: "100%",
    maxHeight: 160,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 2,
  },
  details: {
    flexDirection: "column",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    marginLeft: -55,
  },
  remove: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  image: {
    width: "30%",
    height: "100%",
  },
  category: {
    fontSize: 15,
    alignSelf: "flex-start",
    paddingLeft: 15,
    color: "grey"
  },
  name: {
    fontSize: 16,
    alignSelf: "flex-start",
    paddingLeft: 15,
    fontFamily: "TenorSans",
    maxHeight: 35,
    overflow: "hidden"
  },
  price: {
    fontSize: 19,
    fontFamily: "TenorSans",
    alignSelf: "flex-start",
    paddingLeft: 15,
    color: "orange",
  },
  remove: {
    width: 20,
    height: 20,
    
  },
  cartControl: {
    flexDirection: "columnn",
    justifyContent: "space-between",
    paddingVertical: 10,
    width: "7%",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
  },
    button: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#f0f0f0",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
});
