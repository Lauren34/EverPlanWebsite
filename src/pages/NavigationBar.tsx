import * as React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, TextField, Slide, Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";  // Changed back to CalendarMonthIcon
import { useNavigate } from "react-router-dom";

interface NavigationBarProps {
  onSelect?: (page: string) => void;
  activePage: number;
  onHomeIconClick?: () => void;  // Added this prop
}

export default function NavigationBar({ onSelect, activePage, onHomeIconClick }: NavigationBarProps) {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null);

  const navRef = React.useRef<HTMLDivElement | null>(null);

  const menuItems = [
    { label: "Home", value: "home" },
    { label: "Venues", value: "venues" },
    { label: "Caterers", value: "caterers" }, // Added Caterers Tab
    { label: "Hair", value: "hair" },
    { label: "Makeup", value: "makeup" },
    { label: "Photographers", value: "photographers" },
    { label: "Music", value: "music" },
    { label: "Florist", value: "florist" },
    { label: "Dresser", value: "dresser" },
    { label: "Planner", value: "planner" },
  ];

  React.useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");
    if (storedDate) {
      setSelectedDate(storedDate);
    }
  }, []);

  React.useEffect(() => {
    if (navRef.current) {
      const selectedButton = navRef.current.children[activePage] as HTMLElement;
      if (selectedButton) {
        navRef.current.scrollTo({
          left:
            selectedButton.offsetLeft -
            navRef.current.offsetWidth / 2 +
            selectedButton.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activePage]);

  const handleMenuItemClick = (index: number) => {
    if (onSelect) {
      onSelect(menuItems[index].value);
    }

    if (navRef.current) {
      const selectedButton = navRef.current.children[index] as HTMLElement;
      if (selectedButton) {
        navRef.current.scrollTo({
          left:
            selectedButton.offsetLeft -
            navRef.current.offsetWidth / 2 +
            selectedButton.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  const handleDateClick = () => {
    navigate("/calendar");
  };

  const handleLogoClick = () => {
    handleMenuItemClick(0);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          zIndex: 1200,
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", paddingX: 4 }}>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#a58b84",
              marginRight: 2,
              cursor: "pointer",
            }}
            onClick={handleLogoClick}
          >
            E
          </Avatar>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              cursor: "pointer",
              flexGrow: 1,
              textAlign: "center",
              color: "#000",
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",  // Slight move to the right for better centering
            }}
            onClick={handleDateClick}
          >
            <CalendarMonthIcon sx={{ marginRight: 1, color: "#6B4F4F" }} /> {/* Reverted back to CalendarMonthIcon */}
            <span
              style={{
                color: "#6B4F4F", // Same color for the text
                cursor: "pointer",
              }}
            >
              {selectedDate || "Select Date"}
            </span>
          </Typography>

          <IconButton color="inherit" onClick={handleCartClick}>
            <ShoppingCartIcon sx={{ fontSize: "32px", color: "#5a3c3c" }} /> {/* Darker and larger cart icon */}
          </IconButton>
        </Toolbar>

        <Box
          ref={navRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            flexGrow: 1,
            justifyContent: "flex-start",
            paddingX: 2,
            width: "100%",
            flexWrap: "nowrap",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {menuItems.map((item, index) => (
            <Button
              key={item.value}
              color="inherit"
              sx={{
                textTransform: "uppercase",
                fontWeight: 500,
                fontSize: "14px",
                paddingX: 2,
                minWidth: "max-content",
                backgroundColor: activePage === index ? "#6B4F4F" : "transparent",
                color: activePage === index ? "#fff" : "#000",
                borderRadius: "5px",
                transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
              }}
              onClick={() => handleMenuItemClick(index)}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </AppBar>

      {/* Search Bar (Appears When Clicking the Search Icon) */}
      <Slide direction="down" in={searchOpen} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: "fixed",
            top: "100px",
            left: "15%",
            width: "60%",
            maxWidth: "500px",
            backgroundColor: "#fff",
            borderRadius: "25px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            zIndex: 1250,
          }}
        >
          <SearchIcon sx={{ color: "#6B4F4F", marginRight: 1 }} />
          <TextField
            variant="standard"
            placeholder="Search..."
            fullWidth
            InputProps={{
              disableUnderline: true,
              sx: { fontSize: "16px" },
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton onClick={() => setSearchOpen(false)}>
            <CloseIcon sx={{ color: "#6B4F4F" }} />
          </IconButton>
        </Box>
      </Slide>

      {/* Bottom Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
          height: "60px",
          zIndex: 1300,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton sx={{ color: "#000" }} onClick={onHomeIconClick}> {/* Home Icon Click */}
            <HomeIcon />
          </IconButton>
          <IconButton sx={{ color: "#000" }} onClick={() => setSearchOpen(!searchOpen)}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ color: "#000" }}>
            <MessageIcon />
          </IconButton>
          <IconButton sx={{ color: "#000" }}>
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

