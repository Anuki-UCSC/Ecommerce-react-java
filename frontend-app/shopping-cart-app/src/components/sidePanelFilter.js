import React, { useState } from "react";
import Box from "@mui/material/Box";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { Button, Divider, Grid, Slider, Typography } from "@mui/material";
import "./sidePanelFilter.css";

const ProductsTree = [
  {
    id: "WOMEN",
    label: "WOMEN",
    children: [
      { id: "WOMEN_DRESSES", label: "DRESSES" },
      { id: "WOMEN_TOPS", label: "TOPS" },
      { id: "WOMEN_T_SHIRTS", label: "T-SHIRTS" },
      { id: "WOMEN_PANTS", label: "PANTS" },
      { id: "WOMEN_JEANS", label: "JEANS" },
      { id: "WOMEN_SKIRTS", label: "SKIRTS" },
      { id: "WOMEN_SAREE", label: "SAREE" },
      { id: "WOMEN_INNERWEAR", label: "INNERWEAR" },
      { id: "WOMEN_NIGHTWEAR", label: "NIGHTWEAR" },
    ],
  },
  {
    id: "MEN",
    label: "MEN",
    children: [
      { id: "MEN_SHIRTS", label: "SHIRTS" },
      { id: "MEN_T_SHIRTS", label: "T-SHIRTS" },
      { id: "MEN_JEANS", label: "JEANS" },
      { id: "MEN_TROUSERS", label: "TROUSERS" },
      { id: "MEN_JACKETS", label: "JACKETS" },
    ],
  },
  {
    id: "KIDS",
    label: "KIDS",
    children: [
      { id: "KIDS_T_SHIRTS", label: "T-SHIRTS" },
      { id: "KIDS_JEANS", label: "JEANS" },
      { id: "KIDS_DRESSES", label: "DRESSES" },
      { id: "KIDS_SHORTS", label: "SHORTS" },
    ],
  },
  {
    id: "ACCESSORIES",
    label: "ACCESSORIES",
    children: [
      { id: "ACCESSORIES_BAGS", label: "BAGS" },
      { id: "ACCESSORIES_WALLETS", label: "WALLETS" },
      { id: "ACCESSORIES_BELTS", label: "BELTS" },
      { id: "ACCESSORIES_HATS", label: "HATS" },
    ],
  },
  {
    id: "FOOTWEAR",
    label: "FOOTWEAR",
    children: [
      { id: "FOOTWEAR_SNEAKERS", label: "SNEAKERS" },
      { id: "FOOTWEAR_BOOTS", label: "BOOTS" },
      { id: "FOOTWEAR_SANDALS", label: "SANDALS" },
    ],
  },
];

const SidePanelFilter = () => {
  const sizeList = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];

  const [price, setPrice] = useState([0, 40000]);
  const [maximumPrice, setmaximumPrice] = useState(40000);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handlePriceFilterChange = (event, newValue) => {
    setPrice(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div>
      <Box sx={{ minHeight: 352, minWidth: 250 }}>
        <RichTreeView items={ProductsTree} />
      </Box>
      <div className="categories">
        <Typography variant="h6" fontWeight={600}>
          SIZE
        </Typography>
      </div>
      <Divider component="li" style={{ listStyleType: "none" }} />
      <div className="sizes">
        <Grid container spacing={1}>
          {sizeList.map((size) => (
            <Grid item size={{ xs: 6, sm: 6, md: 4, lg: 3 }}>
              <Button
                variant={
                  selectedSizes.includes(size) ? "contained" : "outlined"
                }
                onClick={() => toggleSize(size)}
              >
                {size}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="categories">
        <Typography variant="h6" fontWeight={600}>
          PRICE
        </Typography>
      </div>
      <Divider component="li" style={{ listStyleType: "none" }} />
      <div className="price-ranges">
        <Typography id="non-linear-slider" gutterBottom>
          Price Range (LKR): {price[0]} - {price[1]}
        </Typography>
        <Slider
          getAriaLabel={() => "Price range"}
          value={price}
          max={maximumPrice}
          step={10}
          onChange={handlePriceFilterChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </div>
    </div>
  );
};

export default SidePanelFilter;
