import React, { useMemo, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import "./App.css";
import {
  ThemeProvider,
  CssBaseline,
  Button,
  Switch,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Typography,
  Badge,
  Breadcrumbs,
  Link,
  Grid,
  Divider,
} from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ProductGrid from "./components/productGrid";
import SidePanelFilter from "./components/sidePanelFilter";

const App = () => {
  const { keycloak, initialized } = useKeycloak();
  const [mode, setMode] = useState("light");

  const commonTypography = {
    letterSpacing: "1.5px",
  };

  const theme = createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#008080", // Teal color for light mode
            },
          }
        : {
            primary: {
              main: "#B2DFDB",
            },
          }),
    },
    typography: {
      fontFamily: "Arial, sans-serif",
      h1: commonTypography,
      h2: commonTypography,
      h3: commonTypography,
      h4: commonTypography,
      h5: commonTypography,
      h6: commonTypography,
      body1: commonTypography,
      body2: commonTypography,
      subtitle1: commonTypography,
      subtitle2: commonTypography,
      button: commonTypography,
    },
    components: {
      MuiTreeItem: {
        styleOverrides: {
          label: {
            color: mode === "light" ? "#666" : "#B2DFDB",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "1px",
            lineHeight: "1.5",
          },
          content: {
            margin: "10px 10px",
            padding: "5px 4px",
          },
        },
      },
    },
  });

  const toggleTheme = (mode) => {
    setMode(mode == "light" ? "dark" : "light");
  };

  if (!initialized) {
    return <div>Loading...</div>;
  }

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Products
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Women
    </Link>,
    <Typography key="3" color="inherit">
      Dresses
    </Typography>,
  ];

  return (
    //
    <div>
      {keycloak.authenticated ? (
        <>
          <ThemeProvider theme={theme}>
            <div className="sticky-bar">
              <AppBar position="static" className="delivery-banner">
                Island Wide Delivery Within 3 Business Days* - SHOP NOW
              </AppBar>

              <AppBar
                position="static"
                className="app-bar"
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                }}
              >
                <Toolbar className="appbar" color="">
                  <Box
                    className="logoCont"
                    style={{ "--primary-color": theme.palette.primary.main }}
                  >
                    <CheckroomIcon fontSize="large" color="primary" />
                    <h1 className="logo">SHOPPY</h1>
                  </Box>

                  <Box className="appbar-buttons">
                    <IconButton>
                      <PersonOutlineOutlinedIcon fontSize="large" />
                    </IconButton>
                    <IconButton>
                      <Badge badgeContent={100} color="primary">
                        <FavoriteBorderIcon fontSize="large" />
                      </Badge>
                    </IconButton>
                    <IconButton>
                      <Badge badgeContent={100} color="primary">
                        <LocalMallOutlinedIcon fontSize="large" />
                      </Badge>
                    </IconButton>
                    <Tooltip
                      title="Log Out"
                      size="large"
                      onClick={() => keycloak.logout()}
                    >
                      <IconButton>
                        <LogoutIcon fontSize="large" />
                      </IconButton>
                    </Tooltip>
                    <Switch onClick={() => toggleTheme(mode)} defaultChecked />
                  </Box>
                </Toolbar>
              </AppBar>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                className="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>

              <Grid container spacing={2}>
                <Grid size={2}>
                  <div className="side-panel">
                    <div className="categories">
                      <Typography variant="h6" fontWeight={600}>
                        CATEGORIES
                      </Typography>
                    </div>
                    <Divider component="li" style={{ listStyleType: "none" }} />
                    <SidePanelFilter />
                  </div>
                </Grid>
                <Grid size={10} className="content">
                  <div className="content-topic">
                    <Typography variant="h4">Women's Wear</Typography>
                  </div>
                  <Divider component="li" style={{ listStyleType: "none" }} />
                  <div className="product-grid-cont">
                    <ProductGrid />
                  </div>
                </Grid>
              </Grid>
            </div>
          </ThemeProvider>
        </>
      ) : (
        <button onClick={() => keycloak.login()}>Login</button>
      )}
    </div>
    // </ThemeProvider>
  );
};

export default App;
