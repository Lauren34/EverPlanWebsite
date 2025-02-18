import * as React from "react";
import { Box, Grid, Card, CardContent, Typography, Modal, Button } from "@mui/material";

export default function PhotographersPage() {
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

  // State for selected photographer
  const [selectedPhotographer, setSelectedPhotographer] = React.useState<any | null>(null);

  const handleOpen = (photographer: any) => {
    setSelectedPhotographer(photographer);
  };

  const handleClose = () => {
    setSelectedPhotographer(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}
      >
        Explore Photographers
      </Typography>

      {/* Grid Layout for Boxes */}
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {/* Dynamically generate each photographer box */}
        {photographers.map((photographer, index) => (
          <Grid item xs={6} key={index}>
            <Card
              sx={{
                borderRadius: 6,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              onClick={() => handleOpen(photographer)} // Open the modal on click
            >
              {/* Blue part: maintaining a 3:4 aspect ratio (height:width = 3:4) */}
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3", // Maintain 4:3 aspect ratio (height is 3/4 of width)
                  backgroundColor: "#d0e7ff", // Placeholder for an image background
                }}
              />
              {/* White part: height is 1/6 of the height of the blue part */}
              <CardContent
                sx={{
                  paddingTop: 2,
                  backgroundColor: "#fff",
                  height: "calc(1 / 6 * 100%)", // Make the height of the white part 1/6 of the blue part height
                  marginTop: "auto",
                  flexShrink: 0,
                  flexGrow: 0,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "calc(1.2vw + 0.8rem)",
                    textAlign: "center",
                    lineHeight: 1.2,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {photographer.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "calc(0.8vw + 0.6rem)",
                    textAlign: "center",
                    lineHeight: 1,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    marginTop: 1, // Add margin-top to increase space between name and description
                  }}
                >
                  {photographer.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for displaying photographer details */}
      <Modal
        open={!!selectedPhotographer}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "85%", // Increased width to 85%
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            height: "40%", // Adjusted max height to 90% of the viewport height
            overflowY: "auto", // Enables vertical scrolling
            position: "relative",
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: "1.5rem",
              backgroundColor: "transparent",
              color: "black",
              border: "none",
              cursor: "pointer",
            }}
          >
            X
          </Button>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {selectedPhotographer?.name}
          </Typography>
          {/* Description displayed in the modal */}
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {selectedPhotographer?.description}
          </Typography>

          {/* Book Button moved to bottom-right corner */}
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              right: 10,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F7C5AD", // Custom button color
                color: "#000", // Ensures the text is visible
                '&:hover': {
                  backgroundColor: "#f7b59b", // Slightly darker hover color
                },
                padding: "8px 20px", // Smaller button
              }}
            >
              Book
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}