import * as React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

export default function VenuesPage() {
  // Example array of venue titles and subtitles
  const venues = [
    { title: "Venue 1", subtitle: "Subtitle 1" },
    { title: "Venue 2", subtitle: "Subtitle 2" },
    { title: "Venue 3", subtitle: "Subtitle 3" },
    { title: "Venue 4", subtitle: "Subtitle 4" },
    { title: "Venue 5", subtitle: "Subtitle 5" },
    { title: "Venue 6", subtitle: "Subtitle 6" },
    { title: "Venue 7", subtitle: "Subtitle 7" },
    { title: "Venue 8", subtitle: "Subtitle 8" },
    { title: "Venue 9", subtitle: "Subtitle 9" },
    { title: "Venue 10", subtitle: "Subtitle 10" },
    { title: "Venue 11", subtitle: "Subtitle 11" },
    { title: "Venue 12", subtitle: "Subtitle 12" },
    { title: "Venue 13", subtitle: "Subtitle 13" },
    { title: "Venue 14", subtitle: "Subtitle 14" },
    { title: "Venue 15", subtitle: "Subtitle 15" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 4,
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}
      >
        Explore Venues
      </Typography>

      {/* Grid Layout for Boxes */}
      <Grid container spacing={4}>
        {/* Dynamically generate each venue box */}
        {venues.map((venue, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 6, // Less circular boxes
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                backgroundColor: "transparent", // Transparent background for the card
              }}
            >
              {/* Blue part: longer height */}
              <Box
                sx={{
                  height: 150, // Adjusted height for the blue section
                  backgroundColor: "#d0e7ff", // Placeholder for an image background
                }}
              />
              {/* White part: shorter height */}
              <CardContent
                sx={{
                  paddingTop: 2, // Reduced padding to make the content area shorter
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {venue.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {venue.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
