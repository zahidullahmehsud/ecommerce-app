import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { categoriesData } from "../../Data/CategoriesData";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoriesData?.map((item) => (
          <View key={item._id}>
            <TouchableOpacity
              style={styles.catContainer}
              onPress={() => navigation.navigate(item.path)}
            >
              <FontAwesome
                name={item.icon}
                size={30}
                color="black"
                style={styles.catIcon}
              />
              <Text style={styles.catName}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
  },
  catContainer: {
    justifyContent: "center",
    padding: 15,
    alignItems: "center",
  },
  catName: {
    fontSize: 13,
  },
  catIcon: {},
});

export default Categories;
