import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const backgroundImages = [
  "/Background19.jpg",
  "/Background20.jpg",
  "/Background21.jpg",
  "/Background22.jpg",
];

export default function HomePage({ onSelect }: { onSelect: (page: string) => void }) {
  const [currentBackground, setCurrentBackground] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const bookNowSection = document.getElementById("book-now-section");
      if (bookNowSection) {
        bookNowSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleBookNowClick = () => {
    const cardSection = document.getElementById("card-section");
    if (cardSection) {
      cardSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCardClick = (page: string) => {
    onSelect(page);
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${backgroundImages[currentBackground]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.8s ease-in-out",
          zIndex: -1,
        }}
      />

      <Box
        id="book-now-section"
        sx={{
          padding: { xs: 2, sm: 4 },
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#b56f76",
            fontSize: { xs: "2rem", sm: "3rem" },
          }}
        >
          EVERPLAN
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontStyle: "italic",
            color: "#6B4F4F",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Plan, Book, Celebrate—It’s That Easy!
        </Typography>

        <Button
          variant="contained"
          sx={{
            marginTop: 2,
            padding: "10px 20px",
            fontSize: "1rem",
            borderRadius: 2,
            width: "200px",
            backgroundColor: "#F7C5AD",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#F7C5AD",
            },
          }}
          onClick={handleBookNowClick}
        >
          Book Now
        </Button>
      </Box>

      <Box id="card-section" sx={{ padding: 4, backgroundColor: "#fff", position: "relative", zIndex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          Explore Our Services
        </Typography>

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {["venues", "caterers", "hair", "makeup", "photographers", "music", "florist", "dresser", "planner"].map((tab) => (
            <Grid item xs={6} sm={4} md={3} key={tab}>
              <Card
                sx={{
                  borderRadius: 6,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => handleCardClick(tab)}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    backgroundImage: `url('/images/${tab}.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <CardContent sx={{ backgroundColor: "#fff", padding: 2, textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}