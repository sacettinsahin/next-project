import React from "react";
import About from "../components/About";
import Campaigns from "../components/Campaings";
import Carousel from "../components/carousel";
import Input from "../components/form/Input";
import Reservation from "../components/Reservation";
import MenuWrapper from "../product/MenuWrapper";

const Index = () => {
  return (
    <div className="">
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};

export default Index;
