import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Button, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";

export default function Demo() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

  const handleOk = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.format("MMMM D, YYYY");
      localStorage.setItem("selectedDate", formattedDate);
      navigate("/new");
    }
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);
  };

  const handleCancel = () => {
    setSelectedDate(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#f3e8e4", // Soft beige background
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          position: "relative",
        }}
      >
        {/* User Profile Placeholder */}
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar sx={{ bgcolor: "#a58b84" }}>U</Avatar>
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#333" }}>
            User Name
          </Typography>
        </Box>

        {/* Calendar Box */}
        <Box
          sx={{
            backgroundImage: "url('/Background163.jpg')", // Background image for calendar box
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            padding: 3,
            maxWidth: 400,
            width: "100%",
          }}
        >
          <DateCalendar
            value={selectedDate}
            onChange={handleDateChange}
            disablePast
            sx={{
              padding: 0,
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
              width: "100%",
            }}
          >
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOk}
              disabled={!selectedDate}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

