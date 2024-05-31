import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Header() {
  const [seacrchText, setSearchText] = useState();

  //Search function
  const handleSearch = () => {
    console.log(seacrchText);
    setSearchText("");
  };
  return (
    <View style={{ height: 90, backgroundColor: "lightgray" }}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => setSearchText(text)}
          value={seacrchText}
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <FontAwesome name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    flex: 1,
  },
  inputBox: {
    position: "absolute",
    width: "100%",
    marginHorizontal: 10,
    fontSize: 15,
    borderRadius: 5,
    backgroundColor: "white",
    paddingLeft: 5,
    height: 40,
    color: "black",
  },
  searchBtn: {
    position: "absolute",
    left: "95%",
  },
});
