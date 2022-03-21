import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import MenuSearch from "./MenuSearch";
import NavbarRightSide from "./NavbarRightSide";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
            <MenuIcon />
          </IconButton>
          <MenuSearch />
          <NavbarRightSide />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
