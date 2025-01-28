import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import NavigationBar from "./NavigationBar";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useNavigate } from "react-router-dom";

// Import page components
import VenuesPage from "./VenuesPage";
import HairPage from "./HairPage";
import MakeupPage from "./MakeupPage";
import PhotographersPage from "./PhotographersPage";
import MusicPage from "./MusicPage";
import FloristPage from "./FloristPage";
import DresserPage from "./DresserPage";
import PlannerPage from "./PlannerPage";

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
        return <VenuesPage />;
      case "hair":
        return <HairPage />;
      case "makeup":
        return <MakeupPage />;
      case "photographers":
        return <PhotographersPage />;
      case "music":
        return <MusicPage />;
      case "florist":
        return <FloristPage />;
      case "dresser":
        return <DresserPage />;
      case "planner":
        return <PlannerPage />;
      default:
        return (
          <Typography variant="h3" align="center">
            Welcome to the Home Page
          </Typography>
        );
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

