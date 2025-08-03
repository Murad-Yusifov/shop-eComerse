import React from "react";
import Section from "./components/sections/Section";
import Carts from "./components/sections/Carts";
import TrendingCarts from "./components/TrendingCarts";
import Cart from "./components/sections/section3/Cart";
import LatestCart from "./components/sections/LatestCart";
import Delivery from "./components/Delivery";
import { data, latestCartData, originalData } from "../../utils/data";

const Home = () => {
  return (
    <>
      <Section />
      <Carts />
      <TrendingCarts data={originalData} />
      <Cart />
      <TrendingCarts data={data} />
      <LatestCart data={latestCartData} />
      <Delivery/>
    </>
  );
};

export default Home;
