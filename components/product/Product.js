import { View, Text } from "react-native";
import React from "react";
import { ProductsData } from "../../Data/ProductData";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <View>
      {ProductsData.map((p) => (
        <ProductCard p={p} key={p._id} />
      ))}
    </View>
  );
};

export default Product;
