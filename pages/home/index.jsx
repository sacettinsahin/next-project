import React from "react";
import Campaigns from "../components/Campaings";
import Carousel from "../components/carousel";
import MenuWrapper from "../components/product/MenuWrapper";

const Index = () => {
  return (
    <div className="">
      <Carousel />
      <Campaigns />
      <MenuWrapper />
    </div>
  );
};

export default Index;
