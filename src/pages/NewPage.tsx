import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import NavigationBar from "./NavigationBar";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useNavigate } from "react-router-dom";

export default function NewPage() {
  const [selectedDate, setSelectedDate] = React.useState(localStorage.getItem("selectedDate") || "Select a date");
  const [selectedPage, setSelectedPage] = React.useState("home");
  const navigate = useNavigate();

  const handleChangeDate = () => {
    navigate("/calendar"); // Navigate to the calendar page
  };

  const renderContent = () => {
    switch (selectedPage) {
      case "venues":
        return <Typography variant="h3">Welcome to the Venues Page</Typography>;
      case "hair":
        return <Typography variant="h3">Welcome to the Hair Page</Typography>;
      case "makeup":
        return <Typography variant="h3">Welcome to the Makeup Page</Typography>;
      case "photographers":
        return <Typography variant="h3">Welcome to the Photographers Page</Typography>;
      case "music":
        return <Typography variant="h3">Welcome to the Music Page</Typography>;
      case "florist":
        return <Typography variant="h3">Welcome to the Florist Page</Typography>;
      case "dresser":
        return <Typography variant="h3">Welcome to the Dresser Page</Typography>;
      case "planner":
        return <Typography variant="h3">Welcome to the Planner Page</Typography>;
      default:
        return <Typography variant="h3">Welcome to the Home Page</Typography>;
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar onSelect={setSelectedPage} />

      {/* Selected Date Display */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          Selected Date: {selectedDate}
        </Typography>
        <Button
          startIcon={<DateRangeIcon />}
          sx={{
            marginLeft: 1,
            textTransform: "capitalize",
          }}
          onClick={handleChangeDate}
        >
          Change
        </Button>
      </Box>

      {/* Dynamic Content */}
      <Box sx={{ padding: 4 }}>{renderContent()}</Box>
    </>
  );
}
