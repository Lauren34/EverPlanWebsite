import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import NavigationBar from "./NavigationBar";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useNavigate } from "react-router-dom";

export default function NewPage() {
  const navigate = useNavigate();

  // Get the selected date from localStorage
  const [selectedDate, setSelectedDate] = React.useState(
    localStorage.getItem("selectedDate") || "Select a date"
  );

  const handleChangeDate = () => {
    navigate("/calendar"); // Navigate to the calendar page
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Selected Date with Change Option */}
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
          sx={{ marginLeft: 1, textTransform: "capitalize" }}
          onClick={handleChangeDate}
        >
          Change
        </Button>
      </Box>

      {/* Empty Listings Templates */}
      <Box sx={{ padding: 4 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Box
              key={item}
              sx={{
                width: "100%", // Responsive width
                maxWidth: 300, // Ensure a max width
                backgroundColor: "#fff",
                padding: 2,
                borderRadius: 2,
                boxShadow: 1,
                textAlign: "center",
                height: 250, // Set height for consistency
              }}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}