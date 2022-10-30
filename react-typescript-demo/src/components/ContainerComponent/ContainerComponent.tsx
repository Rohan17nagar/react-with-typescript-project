import { Grid } from "@mui/material";
import React from "react";
import { allImages } from "../../assets/images/allImages";
import Card from "../Card/Card";
import "./ContainerComponent.scss";
const ContainerComponent = () => {
  return (
    <Grid className="container">
      <div className="container-cards">
        <Card
          image={allImages.BlackShoe}
          title="Nike black shoe"
          price={999}
          type="men's shoes"
        />
        <Card
          image={allImages.BlackShoe}
          title="Nike black shoe"
          price={999}
          type="men's shoes"
        />
        <Card
          image={allImages.BlackShoe}
          title="Nike black shoe"
          price={999}
          type="men's shoes"
        />
      </div>
    </Grid>
  );
};

export default ContainerComponent;
