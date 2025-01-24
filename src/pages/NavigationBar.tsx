import * as React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home"; // Venues Icon
import BrushIcon from "@mui/icons-material/Brush"; // Makeup Icon
import CameraAltIcon from "@mui/icons-material/CameraAlt"; // Photographers Icon
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // Music Icon
import LocalFloristIcon from "@mui/icons-material/LocalFlorist"; // Florist Icon
import PersonIcon from "@mui/icons-material/Person";
import {Link} from "react-router-dom"; // Planner Icon

// Custom Hair Icon
const HairIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    width="24px"
    height="24px"
  >
    <path
      d="M32 4C20 4 12 18 12 32s8 28 20 28 20-12 20-28S44 4 32 4z"
      fill="#000"
    />
    <path
      d="M22 20c2-6 8-10 10-10s8 4 10 10c1 3-1 6-4 9s-6 4-6 4-3-1-6-4-5-6-4-9z"
      fill="#fff"
    />
  </svg>
);

// Custom Bridal Gown Icon for Dresser
const BridalGownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    width="24px"
    height="24px"
  >
    <path
      d="M32 2C20 2 10 12 10 24c0 10 5 19 12 24-3 4-5 10-5 14h30c0-4-2-10-5-14 7-5 12-14 12-24C54 12 44 2 32 2z"
      fill="#000"
    />
    <path d="M32 8a8 8 0 100 16 8 8 0 100-16z" fill="#fff" />
  </svg>
);

export default function NavigationBar() {
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
        {/* Logo on the Left */}
        <Box
          component={Link}
          to="/new"
          sx={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "#ccc",
              borderRadius: "50%",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Logo Placeholder
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <Button
            component={Link}
            to="/venues"
            color="inherit"
            startIcon={<HomeIcon />}
            sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "14px" }}
          >
            Venues
          </Button>
          <Button
            component={Link}
            to="/hair"
            color="inherit"
            startIcon={<HairIcon />}
            sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "14px" }}
          >
            Hair
          </Button>
          <Button
            component={Link}
            to="/makeup"
            color="inherit"
            startIcon={<BrushIcon />}
            sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "14px" }}
          >
            Makeup
          </Button>
          <Button
            component={Link}
            to="/photographers"
            color="inherit"
            startIcon={<CameraAltIcon />}
            sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "14px" }}
          >
            Photographers
          </Button>
          <Button
            component={Link}
            to="/music"
            color="inherit"
            startIcon={<MusicNoteIcon />}
            sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "14px" }}
          >
            Music
          </Button>
          <Button
            component={Link}
            to="/florist"
            color="inherit"
            startIcon={<LocalFloristIcon />}
            sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "14px" }}
          >
            Florist
          </Button>
          <Button
            component={Link}
            to="/dresser"
            color="inherit"
            startIcon={<BridalGownIcon />}
            sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "14px" }}
          >
            Dresser
          </Button>
          <Button
            component={Link}
            to="/planner"
            color="inherit"
            startIcon={<PersonIcon />}
            sx={{ textTransform: "uppercase", fontWeight: 500, fontSize: "14px" }}
          >
            Planner
          </Button>
        </Box>

        {/* Shopping Cart Icon on the Right */}
        <IconButton
          component={Link}
          to="/cart"
          color="inherit"
          sx={{
            padding: 1,
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}