import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableWithoutFeedback, Image ,  Dimensions} from "react-native";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const screenWidth = Dimensions.get('window').width;


const getProducts = async ()  => {
  try {
    return await fetch("https://fakestoreapi.com/products/")
    .then(res=> res.json())
  } catch {
    console.log("Error loading product")
  }
}

export default function ProductGallery({ navigation }) {

  const [products, setProducts] = useState([]);
  const { addItemToCart, setCartItems } = useCart();


    useEffect(() => {
      const product = getProducts();
      product.then((data) => {
        data.map((item) => {
          item.quantity = 1;
        })
        setProducts(data);
      });
    } ,[]);


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.ourStory}>
                <Text style={{fontSize: 24, fontFamily: "TenorSans"}}>Our Story </Text>
            </View>
            <View style={styles.options}>
                <TouchableWithoutFeedback>
                    <Image source={require("../assets/Listview.png")}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Image source={require("../assets/Filter.png")}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
      <View style={{alignItems: "center", maxWidth: screenWidth, flex: 1}}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          
          <View style={{
            padding: 5,
            marginHorizontal: index % 2 === 0 ? 5 : 0, 
            maxHeight: 350,
          }}>
            <ProductCard product={item} addToCart={addItemToCart} navigation={navigation} />
          </View>

        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{
            maxWidth: screenWidth,
            flexDirection: "column",
            alignContent: "space-around",
            justifyContent: "center",
             // Apply half space as padding to the container
          }}
          showsVerticalScrollIndicator={false}
          
      />
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
    paddingTop: 12,
  },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20
    },
    ourStory: {
        justifyContent: "center",
        height: 25,
        paddingBottom: 0,
        
    },
    options: {
        flexDirection: "row",
        width: 100,
        height: "10%",
        justifyContent: "flex-end",
    }

});
