import * as React from "react";
import { Box, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";

export default function PhotographersPage() {
  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h3">Welcome to the Photographers Page</Typography>
      </Box>
    </>
  );
}