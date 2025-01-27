import * as React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

interface NavigationBarProps {
  onSelect?: (page: string) => void; // Optional onSelect prop
}

export default function NavigationBar({ onSelect }: NavigationBarProps) {
  const menuItems = [
    { label: "Venues", value: "venues" },
    { label: "Hair", value: "hair" },
    { label: "Makeup", value: "makeup" },
    { label: "Photographers", value: "photographers" },
    { label: "Music", value: "music" },
    { label: "Florist", value: "florist" },
    { label: "Dresser", value: "dresser" },
    { label: "Planner", value: "planner" },
  ];

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: "#fff" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 4,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
          onClick={() => onSelect && onSelect("home")} // Set to home when clicked
        >
          Logo Placeholder
        </Typography>

        {/* Centered Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexGrow: 1,
            justifyContent: "center", // Center align the buttons
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.value}
              color="inherit"
              sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "14px" }}
              onClick={() => onSelect && onSelect(item.value)} // Call onSelect if defined
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Shopping Cart Icon */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton component={Link} to="/cart" color="inherit">
            <ShoppingCartIcon sx={{ fontSize: "28px", color: "#000" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
