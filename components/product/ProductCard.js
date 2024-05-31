import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ p }) => {
  const navigation = useNavigation();

  //Detail btn Function
  const handleProductDetails = () => {
    navigation.navigate("productDetails", { id: p._id });
  };
  return (
    <View>
      <View style={styles.card}>
        <Image source={{ uri: p.imageUrl }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{p.name}</Text>
        <Text style={styles.cardDesc}>
          {p.description.substring(0, 45)} ...more
        </Text>
        <Text style={styles.cardPrice}>${p.price}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.DetailBtn}
            onPress={handleProductDetails}
          >
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartBtn} onPress={() => alert(p._id)}>
            <Text style={styles.btnText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    width: "45%",
    // borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    alignContent: "center",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  cardImage: {
    height: 120,
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDesc: {
    fontSize: 10,
    color: "grey",
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },
  DetailBtn: {
    backgroundColor: "black",
    borderRadius: 5,
    padding: 1,
    width: 75,
    height: 25,
  },
  cartBtn: {
    backgroundColor: "orange",
    borderRadius: 3,
    padding: 1,
    width: 75,
    height: 25,
  },
  btnText: { color: "white", textAlign: "center" },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProductCard;
