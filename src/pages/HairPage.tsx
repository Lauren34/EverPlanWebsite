import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function HairPage() {
  return (
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
      <Typography variant="h3">Welcome to the Hair Page</Typography>
    </Box>
  );
}
