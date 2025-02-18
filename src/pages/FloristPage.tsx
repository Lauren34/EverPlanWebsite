import * as React from "react";
import { Box, Grid, Card, CardContent, Typography, Modal, Button } from "@mui/material";

export default function FloristPage() {
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

  // State for selected florist
  const [selectedFlorist, setSelectedFlorist] = React.useState<any | null>(null);

  const handleOpen = (florist: any) => {
    setSelectedFlorist(florist);
  };

  const handleClose = () => {
    setSelectedFlorist(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F5ECE3", // Keeping the same soft beige background
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: 3,
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          color: "#6B4F4F",
        }}
      >
        Explore Florists
      </Typography>

      {/* Grid Layout for Florist Cards */}
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {florists.map((florist, index) => (
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
              onClick={() => handleOpen(florist)} // Open modal on click
            >
              {/* Image Placeholder */}
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  backgroundColor: "#d0e7ff", // Same blue placeholder as VenuesPage
                }}
              />
              {/* White content section */}
              <CardContent
                sx={{
                  paddingTop: 2,
                  backgroundColor: "#fff",
                  height: "calc(1 / 6 * 100%)",
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
                    fontFamily: "'Playfair Display', serif",
                    color: "#6B4F4F",
                  }}
                >
                  {florist.title}
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
                    marginTop: 1,
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  {florist.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for displaying florist details */}
      <Modal
        open={!!selectedFlorist}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "85%",
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            height: "40%",
            overflowY: "auto",
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
            {selectedFlorist?.title}
          </Typography>
          {/* Description displayed in the modal */}
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {selectedFlorist?.description}
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
