 import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";

export default function Demo() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null); // No date selected initially

  const handleOk = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.format("MMMM D, YYYY");
      localStorage.setItem("selectedDate", formattedDate); // Save the date to localStorage
      navigate("/new"); // Navigate to the New Page
    }
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate); // Update state with the selected date
  };

  const handleCancel = () => {
    setSelectedDate(null); // Reset selected date
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          border: "1px solid #ccc",
          borderRadius: 4,
          maxWidth: 400,
          margin: "0 auto",
          backgroundColor: "#fff",
        }}
      >
        <DateCalendar
          value={selectedDate}
          onChange={handleDateChange} // Update date on selection
          disablePast
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
            disabled={!selectedDate} // Disable if no date is selected
          >
            OK
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}