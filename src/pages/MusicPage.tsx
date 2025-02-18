import * as React from "react";
import { Box, Typography, Grid, Card, CardContent, Modal, Button } from "@mui/material";

export default function MusicPage() {
  const musicItems = [
    { title: "Song 1", description: "Description 1" },
    { title: "Song 2", description: "Description 2" },
    { title: "Song 3", description: "Description 3" },
    { title: "Song 4", description: "Description 4" },
    { title: "Song 5", description: "Description 5" },
    { title: "Song 6", description: "Description 6" },
    { title: "Song 7", description: "Description 7" },
    { title: "Song 8", description: "Description 8" },
    { title: "Song 9", description: "Description 9" },
    { title: "Song 10", description: "Description 10" },
    { title: "Song 11", description: "Description 11" },
    { title: "Song 12", description: "Description 12" },
    { title: "Song 13", description: "Description 13" },
    { title: "Song 14", description: "Description 14" },
    { title: "Song 15", description: "Description 15" },
  ];

  // State for selected music item
  const [selectedMusicItem, setSelectedMusicItem] = React.useState<any | null>(null);

  const handleOpen = (musicItem: any) => {
    setSelectedMusicItem(musicItem);
  };

  const handleClose = () => {
    setSelectedMusicItem(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2, // Reduced padding for better screen fit
        boxSizing: "border-box", // Ensures padding doesn't cause overflow
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}
      >
        Explore Music
      </Typography>

      {/* Grid Layout for Music Items */}
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {/* Dynamically generate each music item card */}
        {musicItems.map((musicItem, index) => (
          <Grid item xs={6} key={index}>
            <Card
              sx={{
                borderRadius: 6, // Less circular boxes
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                backgroundColor: "transparent", // Transparent background for the card
                display: "flex", // Flex to make the contents take the available space
                flexDirection: "column", // Keep content stacked vertically
                height: "100%", // Make card take full height of the grid item
              }}
              onClick={() => handleOpen(musicItem)} // Open the modal on click
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
                  paddingTop: 2, // Reduced padding to make the content area shorter
                  backgroundColor: "#fff", // White background for content
                  height: "calc(1 / 6 * 100%)", // Make the height of the white part 1/6 of the blue part height
                  marginTop: "auto", // Ensure white part stays at the bottom of the card
                  flexShrink: 0, // Prevent the white part from shrinking
                  flexGrow: 0, // Prevent it from growing larger
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "calc(1.2vw + 0.8rem)", // Use viewport width to scale font size
                    textAlign: "center", // Center the text horizontally
                    lineHeight: 1.2, // Adjust line height for better readability
                    overflow: "hidden",
                    whiteSpace: "nowrap", // Prevent text from wrapping
                    textOverflow: "ellipsis", // Add ellipsis if text overflows
                  }}
                >
                  {musicItem.title}
                </Typography>
                {/* Add margin-top to subtitle for extra spacing */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "calc(0.8vw + 0.6rem)", // Slightly smaller for subtitle
                    textAlign: "center", // Center the subtitle text
                    lineHeight: 1,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    marginTop: 1, // Add margin-top to increase space between title and subtitle
                  }}
                >
                  {musicItem.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for displaying music details */}
      <Modal
        open={!!selectedMusicItem}
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
            {selectedMusicItem?.title}
          </Typography>
          {/* Description displayed in the modal */}
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {selectedMusicItem?.description}
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
