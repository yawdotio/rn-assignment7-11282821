import "react-native-gesture-handler";
import React from "react";
import { View, Image , Text, StyleSheet, Button} from "react-native";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import ProductGallery from "./screens/Gallery";
import ProductDetails from "./screens/ProductDetail";
import * as Font from 'expo-font'
import Cart from "./screens/Cart";
import { CartProvider } from "./context/CartContext";
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState, useEffect } from "react";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

async function loadFonts() {
  await Font.loadAsync({
    'SansSerif': require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'TenorSans': require('./assets/fonts/TenorSans-Regular.ttf'),
  });
}

function StackScreens() {
  return (
    <Stack.Navigator  initialRouteName="ProductGallery"
      screenOptions={({ navigation }) => ({
      headerShown: true,
      headerTitle: () => (
        <Image
          source={require("./assets/Logo.png")}
          style={{ width: 110, height: "100%" }}
          resizeMode="contain"
          resizeMethod="scale"
        />
      ),
      headerTitleAlign: "center",
      headerRight: () => (
        <View style={{ flexDirection: "row", paddingRight: 15 }}>
          <Ionicons
            name="search-outline"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
            onPress={() => console.log("Search")}
          />
          <Ionicons
            name="bag-outline"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Cart")}
          />
        </View>
      ),
      headerLeft: () => {
        return (
          <TouchableWithoutFeedback
            onPress={() => navigation.toggleDrawer()}
          >
            <Image source={require("./assets/Menu.png")} color="black" />
          </TouchableWithoutFeedback>
        );
      },
      headerLeftContainerStyle: { paddingLeft: 15 },
    })}>
      <Stack.Screen name="ProductGallery" component={ProductGallery} />
      <Stack.Screen name="ProductDetail" component={ProductDetails} 
      options={({ navigation }) => ({
        title: 'Product Detail',
        headerLeft: () => (
          <Ionicons
                  name="arrow-back"
                  size={24}
                  color="black"
                  onPress={() => navigation.goBack()}
                />
        ),
      })}/>
    </Stack.Navigator>
  );

}

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Yaw Bempong</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};




export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFonts();
      setFontsLoaded(true);
    }
    load();
  }, []);

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }




  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="ProductGallery"
          drawerContent={(props) => <CustomDrawerContent {...props}/>}
          screenOptions={({ navigation }) => ({
            headerShown: true,
            headerTitle: () => (
              <Image
                source={require("./assets/Logo.png")}
                style={{ width: 110, height: "100%" }}
                resizeMode="contain"
                resizeMethod="scale"
              />
            ),
            headerTitleAlign: "center",
            headerRight: () => (
              <View style={{ flexDirection: "row", paddingRight: 15 }}>
                <Ionicons
                  name="search-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 15 }}
                  onPress={() => console.log("Search")}
                />
                <Ionicons
                  name="bag-outline"
                  size={24}
                  color="black"
                  onPress={() => navigation.navigate("Cart")}
                />
              </View>
            ),
            headerLeft: () => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => navigation.toggleDrawer()}
                >
                  <Image source={require("./assets/Menu.png")} color="black" />
                </TouchableWithoutFeedback>
              );
            },
            headerLeftContainerStyle: { paddingLeft: 15 },
          })}
        >
          <Drawer.Screen name="Store" component={StackScreens} 
          options={({ navigation }) => ({
            headerShown: false, 
          })}/>
          <Drawer.Screen name="Locations" component={Cart} />
          <Drawer.Screen name="Blog" component={Cart} />
          <Drawer.Screen name="Jewelery" component={Cart} />
          <Drawer.Screen name="Electronic" component={Cart} />
          <Drawer.Screen name="Clothing" component={Cart} />
          <Drawer.Screen
            name="Cart"
            component={Cart}
            options={({ navigation }) => ({
              headerShown: true,
              headerRight: () => (
                <View style={{ flexDirection: "row", paddingRight: 15 }}>
                  <Ionicons
                    name="search-outline"
                    size={24}
                    color="black"
                    style={{ marginRight: 15 }}
                    onPress={() => console.log("Search")}
                  />
                </View>
              ),
            })}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}


const styles = StyleSheet.create({
  drawerHeader: {
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    
  },
  drawerHeaderText: {
    fontSize: 24,
    fontFamily: "TenorSans",
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
  },
});
