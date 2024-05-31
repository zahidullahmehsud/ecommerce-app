import { StyleSheet, Text, View } from "react-native";
// import { useLocalSearchParams } from "expo-router";
import Layout from "../../components/layout/Layout";
import Header from "../../components/layout/Header";
import Categories from "../../components/category/Categories";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Categories />
      <Banner />
      <Product />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
