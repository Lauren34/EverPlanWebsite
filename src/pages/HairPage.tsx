import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function HairPage() {
  const days = ["MON", "TUE", "WED", "THU", "FRI"];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Centers content vertically
        padding: { xs: 2, sm: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fullscreen Background Image */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('/Background15.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      />

      {/* Centered Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center", // Centers text
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            marginBottom: { xs: 2, sm: 3 },
            fontSize: { xs: "1.8rem", sm: "2.5rem" },
            color: "#6B4F4F",
          }}
        >
          Available Hair Appointments
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Playfair Display', serif",
            marginBottom: { xs: 3, sm: 4 },
            fontSize: { xs: "1rem", sm: "1.2rem" },
            color: "#6B4F4F",
          }}
        >
          Book Now
        </Typography>
        {days.map((day, index) => (
          <Box
            key={index}
            sx={{
              width: "100px", // Button size
              height: "50px",
              backgroundColor: "#BBAFA2",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 2,
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Button shadow effect
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#A89C8C",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              {day}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

