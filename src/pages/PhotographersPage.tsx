import * as React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

export default function PhotographersPage() {
  // Example array of photographer names and descriptions
  const photographers = [
    { name: "Photographer 1", description: "Description 1" },
    { name: "Photographer 2", description: "Description 2" },
    { name: "Photographer 3", description: "Description 3" },
    { name: "Photographer 4", description: "Description 4" },
    { name: "Photographer 5", description: "Description 5" },
    { name: "Photographer 6", description: "Description 6" },
    { name: "Photographer 7", description: "Description 7" },
    { name: "Photographer 8", description: "Description 8" },
    { name: "Photographer 9", description: "Description 9" },
    { name: "Photographer 10", description: "Description 10" },
    { name: "Photographer 11", description: "Description 11" },
    { name: "Photographer 12", description: "Description 12" },
    { name: "Photographer 13", description: "Description 13" },
    { name: "Photographer 14", description: "Description 14" },
    { name: "Photographer 15", description: "Description 15" },
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
        Explore Photographers
      </Typography>

      {/* Grid Layout for Photographer Boxes */}
      <Grid container spacing={4}>
        {/* Dynamically generate each photographer card */}
        {photographers.map((photographer, index) => (
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
                  {photographer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {photographer.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
