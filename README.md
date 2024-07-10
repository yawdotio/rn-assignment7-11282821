# rn-assignment7-11282821
ReactNative assignment on e-storefront

# rn-assignment7-11282821

# Fashion E-commerce App

A React Native application designed for a seamless shopping experience, featuring a curated selection of fashion items. This app offers an intuitive user interface that allows users to browse, select, and purchase their favorite clothing items with ease. From the latest trends in women's fashion to essential accessories, find everything you need with just a few taps.

## Features

- **Product Gallery:** Explore a wide range of fashion products through a user-friendly gallery.
- **Cart Management:** Easily add items to your cart, review your selections, and proceed to checkout.
- **Easy Navigation:** Utilize the drawer navigator to switch between the product gallery and your shopping cart effortlessly.

## Installation

To run this project, you'll need to have Node.js installed on your computer. After cloning the repository, navigate to the project directory and run:

To install the application, follow these steps:

1. Clone the repository: `git clone https://github.com/yawadubempong/rn-assignment7-11282821.git`
2. Navigate to the project directory: `cd rn-assignment7-11282821/boutique`
3. Install the dependencies: `npm install`

## Running the Application

To run the application, use the command: `npm start`

## Custom Components

In the `Gallery.js` file of our React Native project, we utilize a variety of custom components to build a user-friendly product gallery interface. Here's a brief overview of each component used:

### 1. `ProductCard`
- **Description:** Displays a single product, including its image, name, and price. It's designed to be reusable across different parts of the app where a product preview is needed.
- **Props:**
  - `product`: Object - The product details to be displayed.
  - `addToCart`: Function - A function to add the product to the shopping cart.

### 2. `Cart`
- **Description:** A screen that lists all the items added to the shopping cart. It allows users to modify their cart items and proceed to checkout.
- **Props:**
  - `cartItems`: Array - An array of product objects added to the cart.
  - `setCartItems`: Function - A function to update the cart items.

### Custom Elements within `ProductGallery`
- **Product Display:** A `FlatList` is used to render a grid of `ProductCard` components, allowing users to browse through the available products.
- **Navigation Options:** The header includes options to toggle the view and filter the displayed products, enhancing the browsing experience.

These components and elements work together to create a cohesive and user-friendly interface that makes online shopping a breeze, enhancing the overall user experience.

## Local Storage 
The project uses the `AsyncStorage` library to store the cart that will allow the cart to be persisted on each reload of the app.

## Screenshots

### Product Gallery

| Gallery View | Cart View |
|--------------|-----------|
| ![Product Gallery View](<WhatsApp Image 2024-07-10 at 08.59.11_ac1e2311.jpg>)| ![Cart View](<WhatsApp Image 2024-07-10 at 08.59.12_a88afd98.jpg>)|

## Product Detail Screen
This section introduces a Product Detail Screen to provide more information about each product, including descriptions, pricing, and additional images. This screen is accessible by tapping on a product in the Product Gallery.

### Screenshots

#### Product Detail

| Detail View |
|-------------|
| ![Product Detail View](<WhatsApp Image 2024-07-10 at 08.59.12_76b0cb3e.jpg>)|

## Updated Drawer Navigation
The application's navigation has been updated to include a drawer for easier access to different sections of the app. This drawer includes links to the Product Gallery, Product Detail Screen, and Cart, providing a seamless navigation experience.

### Screenshots

#### Updated Drawer View

| Drawer View |
|-------------|
| ![Drawer View](<WhatsApp Image 2024-07-10 at 08.59.11_3a63f42f.jpg>) |

## API Calls
The application integrates with the FakeStore API to fetch product data, including names, descriptions, and prices. This integration allows for a dynamic and scalable product listing.

### Endpoints Used
- **Get Products**: `GET /products` - Retrieves the list of products.
- **Get Product Detail**: `GET /products/{id}` - Retrieves details of a specific product.

### Example
Fetching product details:

```javascript
fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))
