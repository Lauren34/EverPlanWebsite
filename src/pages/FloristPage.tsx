import * as React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

export default function FloristPage() {
  // Example array of florist names and descriptions
  const florists = [
    { title: "Florist 1", description: "Description 1" },
    { title: "Florist 2", description: "Description 2" },
    { title: "Florist 3", description: "Description 3" },
    { title: "Florist 4", description: "Description 4" },
    { title: "Florist 5", description: "Description 5" },
    { title: "Florist 6", description: "Description 6" },
    { title: "Florist 7", description: "Description 7" },
    { title: "Florist 8", description: "Description 8" },
    { title: "Florist 9", description: "Description 9" },
    { title: "Florist 10", description: "Description 10" },
    { title: "Florist 11", description: "Description 11" },
    { title: "Florist 12", description: "Description 12" },
    { title: "Florist 13", description: "Description 13" },
    { title: "Florist 14", description: "Description 14" },
    { title: "Florist 15", description: "Description 15" },
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
        Explore Florists
      </Typography>

      {/* Grid Layout for Florists */}
      <Grid container spacing={4}>
        {/* Dynamically generate each florist card */}
        {florists.map((florist, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 6, // Less circular boxes
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                backgroundColor: "transparent", // Transparent background for the card
              }}
            >
              {/* Placeholder Image */}
              <Box
                sx={{
                  height: 150, // Height for the blue section (or an image section)
                  backgroundColor: "#d0e7ff", // Placeholder color for the image section
                }}
              />
              {/* White part: Shorter content section */}
              <CardContent
                sx={{
                  paddingTop: 2, // Reduced padding to make the content area shorter
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {florist.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {florist.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
