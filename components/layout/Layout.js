import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar />
      <View>{children}</View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flex: 1,
    zIndex: 100,
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    width: "100%",
    borderColor: "lightgray",
    padding: 10,
  },
});

export default Layout;
