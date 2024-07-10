import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useCart } from "../context/CartContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const getProductDetail = async (id) => {
  try {
    return await fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json()
    );
  } catch (error) {
    console.log("Error loading product:", error);
  }
};

export default function ProductDetails({ route }) {
  const [product, setProduct] = useState([]);
  const { addItemToCart } = useCart();

  useEffect(() => {
    const { product } = route.params;
    getProductDetail(product.id).then((data) => {
      data = {...data, quantity: 1}
      setProduct(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.details}> 
        <Image source={{ uri: product.image}}  style={styles.image}  resizeMode="contain"
        resizeMethod="resize"/>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => addItemToCart(product)}>
          <View style={styles.buttonContainer}>
            <Ionicons name="add" size={24} color="white" />
            <Text style={{ fontSize: 24, color: "white" }}>Add to Cart</Text>
            <Ionicons name="heart-outline" size={24} color="white" />
          </View>
        </TouchableOpacity>
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
    marginTop: -65,
  },
  details: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "94%"
  },
  image:{
    width: "100%",
    height: "50%",
    maxHeight: "50%",
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
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    backgroundColor: "black",
    width: "120%",
    alignSelf: "center",

  },
  description: {
    flexDirection: "column",
    width: "100%",
    justifyItems: "flex-end",
    alignSelf: "flex-start",
    color: "grey",
    flexWrap: "wrap"
  },
  category: {
    fontSize: 16,
    alignSelf: "flex-start",
    fontFamily: "SansSerif",
  },
  title: {
    fontSize: 24,
    fontFamily: "TenorSans",
    maxWidth: "95%",
    flexWrap: "wrap",
    alignSelf: "flex-start",
  },
  price: {
    fontSize: 16,
    color: "orange",
    alignSelf: "flex-end",
  },
});

