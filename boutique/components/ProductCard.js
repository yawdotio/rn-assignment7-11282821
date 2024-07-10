import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { useCart } from "../context/CartContext";


export default function ProductCard({ product = { product }, navigation }) {
  const { addItemToCart } = useCart();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate("ProductDetail",{ product })}>
      <Image
        source={{uri: product.image}}
        style={styles.image}
        resizeMode="contain"
        resizeMethod="resize"
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addItemToCart(product)}>
        <Image source={require("../assets/add_circle.png")} style={styles.add} />
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 0,
    maxWidth: 150,
    maxHeight: "100%",
    minHeight: "100%"
   
  },
  description: {
    flexDirection: "column",
    width: "100%",
    justifyItems: "flex-end",
    alignSelf: "center",
    alignItems: "baseline",
    flexWrap: "wrap"
  },
  image: {
    width: 150,
    padding: 10,
    height: 200,
  },
  category: {
    fontSize: 12,
    fontFamily: "SansSerif",
    color: "grey",
  },
  name: {
    fontSize: 14,
    fontFamily: "TenorSans",
    maxWidth: "95%",
    maxHeight: 52,
    flexWrap: "wrap",
  },
  price: {
    fontSize: 16,
    color: "orange",
  },
  add: {
    position: "absolute",
    top: -30,
    right: 20,
    color: "orange",

  }
});
