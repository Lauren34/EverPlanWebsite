import * as React from "react";
import { Box, Grid, Card, CardContent, Typography, Modal, Button } from "@mui/material";

// Define a type for the caterer
interface Caterer {
  name: string;
  cuisine: string;
  description: string;
}

export default function CaterersPage() {
  // Example array of caterers
  const caterers: Caterer[] = [
    { name: "Caterer 1", cuisine: "Italian", description: "Authentic Italian cuisine with fresh ingredients." },
    { name: "Caterer 2", cuisine: "Mexican", description: "Traditional Mexican flavors and gourmet street food." },
    { name: "Caterer 3", cuisine: "Japanese", description: "Sushi, ramen, and more with the highest quality seafood." },
    { name: "Caterer 4", cuisine: "French", description: "Fine French dining experience with gourmet pastries." },
    { name: "Caterer 5", cuisine: "Indian", description: "Spicy and aromatic Indian cuisine with vegetarian options." },
    { name: "Caterer 6", cuisine: "Mediterranean", description: "Healthy and delicious Mediterranean dishes." },
    { name: "Caterer 7", cuisine: "American BBQ", description: "Smoked meats, grilled delights, and classic BBQ flavors." },
    { name: "Caterer 8", cuisine: "Chinese", description: "Authentic Chinese dishes, from dim sum to stir-fry." },
    { name: "Caterer 9", cuisine: "Vegan", description: "Plant-based gourmet dishes for health-conscious diners." },
    { name: "Caterer 10", cuisine: "Thai", description: "Bold flavors and fragrant Thai street food favorites." },
  ];

  const [selectedCaterer, setSelectedCaterer] = React.useState<Caterer | null>(null);

  const handleOpen = (caterer: Caterer) => {
    setSelectedCaterer(caterer);
  };

  const handleClose = () => {
    setSelectedCaterer(null);
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
        Explore Caterers
      </Typography>

      {/* Grid Layout for Caterers */}
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {caterers.map((caterer, index) => (
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
              onClick={() => handleOpen(caterer)} // Open the modal on click
            >
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  backgroundColor: "#d0e7ff",
                }}
              />
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
                  }}
                >
                  {caterer.name}
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
                  }}
                >
                  {caterer.cuisine}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for displaying caterer details */}
      <Modal
        open={!!selectedCaterer}
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
            {selectedCaterer?.name}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {selectedCaterer?.description}
          </Typography>

          {/* Book Button */}
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
                backgroundColor: "#F7C5AD",
                color: "#000",
                '&:hover': {
                  backgroundColor: "#f7b59b",
                },
                padding: "8px 20px",
              }}
            >
              Book Catering
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

