import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function MakeupPage() {
  const days = [
    { day: "MON", text: "Available from 9 AM - 6 PM" },
    { day: "TUE", text: "Available from 10 AM - 5 PM" },
    { day: "WED", text: "Fully booked" },
    { day: "THU", text: "Available from 12 PM - 8 PM" },
    { day: "FRI", text: "Available from 9 AM - 4 PM" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FDF5E6", // Light beige background
        padding: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "transparent",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 2,
            color: "#6B4F4F",
          }}
        >
          Available Makeup Appointments
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Playfair Display', serif",
            textAlign: "center",
            marginBottom: 4,
            color: "#6B4F4F",
          }}
        >
          Book Your Slot Today
        </Typography>
        {days.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            {/* Day Box */}
            <Box
              sx={{
                width: 80,
                height: 60,
                backgroundColor: "#B89C94", // Soft neutral for the day box
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                fontWeight: "bold",
                marginRight: 2,
              }}
            >
              {item.day}
            </Box>
            {/* Appointment Box */}
            <Box
              sx={{
                flex: 1,
                height: 60,
                backgroundColor: "white",
                borderRadius: 2,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                paddingLeft: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  color: "#333",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

