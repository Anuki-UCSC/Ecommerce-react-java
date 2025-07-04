import { Button, Grid } from "@mui/material";
import React from "react";
import "./productGrid.css";

const ProductBox = ({ product }) => {
  const { productName, imageUrl, sizes, price } = product;
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <div className="image-cont">
        <img src={imageUrl} alt="High Waist Trouser" className="image" />
      </div>

      <h4 className="product-name-text">{productName}</h4>
      <h4 className="product-price-text"> {price}.00 LKR</h4>
      <div className="size-count-con">
        <Button variant="outlined">X</Button>
        <Button variant="outlined">X</Button>
        <Button variant="outlined">X</Button>
        <Button variant="outlined">X</Button>
      </div>
    </Grid>
  );
};

const ProductGrid = () => {
  const products = [
    {
      productName: "High Waist Trouser",
      imageUrl: "/assets/high_waist_trouser.png",
      sizes: ["XS", "S", "M", "L"],
      price: 1600.0,
    },
    {
      productName: "Maxi Side Tie Blouse",
      imageUrl: "/assets/maxi_side_tie_blouse.png",
      sizes: ["S", "M", "L", "XL"],
      price: 2790.0,
    },
    {
      productName: "Pink Floral Skirt",
      imageUrl: "/assets/pink_floral_skirt.png",
      sizes: ["XS", "S", "M"],
      price: 3090.0,
    },
    {
      productName: "Rose Jumpsuit",
      imageUrl: "/assets/rose_jumpsuit.png",
      sizes: ["M", "L"],
      price: 4780.0,
    },
    {
      productName: "V Neck Red Flower Dress",
      imageUrl: "/assets/v_neck_red_flower_dress.png",
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 3750.0,
    },
    {
      productName: "White Dot Dress",
      imageUrl: "/assets/white_dot_dress.png",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      price: 3890.0,
    },
  ];

  return (
    <Grid container spacing={4}>
      {products.map((product, index) => (
        <ProductBox key={index} product={product} />
      ))}
    </Grid>
  );
};

export default ProductGrid;
