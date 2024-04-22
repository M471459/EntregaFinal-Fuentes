import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import CartWidget from "../../common/CartWidget/CartWidget";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export const Navbar = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="sticky" color="primary">
            <Toolbar>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dxtpzbn2l/image/upload/v1711375626/logo2_sruiyu.png"
                  height="100px"
                  wight="160px"
                />
              </Link>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ my: 5 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to="/deportes/futbol">
                  <MenuItem
                    onClick={handleMenuClose}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    FUTBOL
                  </MenuItem>
                </Link>
                <Link to="/deportes/crossfit">
                  <MenuItem
                    onClick={handleMenuClose}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    CROSSFIT
                  </MenuItem>
                </Link>
                <Link to="/deportes/running">
                  <MenuItem
                    onClick={handleMenuClose}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    RUNNING
                  </MenuItem>
                </Link>
                <Link to="/deportes/paddle">
                  <MenuItem
                    onClick={handleMenuClose}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    PADDLE
                  </MenuItem>
                </Link>
              </Menu>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/">
                  <Button
                    key="todas"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    TODOS
                  </Button>
                </Link>
                <Link to="/category/hombre">
                  <Button
                    key="ninos"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Hombre
                  </Button>
                </Link>
                <Link to="/category/mujer">
                  <Button
                    key="ninos"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Mujer
                  </Button>
                </Link>
                <Link to="/category/ninos">
                  <Button
                    key="ninos"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Niños
                  </Button>
                </Link>
                <Link to="/category/oferta">
                  <Button
                    key="oferta"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Ofertas
                  </Button>
                </Link>
              </Box>

              <Button color="inherit">Tu Cuenta</Button>
              <CartWidget />
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
      {children}
    </div>
  );
};
