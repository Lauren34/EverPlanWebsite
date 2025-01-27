import * as React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function ShoppingCartPage() {
  return (
    <>
      <NavigationBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 4,
          gap: 4,
          backgroundColor: "#f9f9f9",
          minHeight: "calc(100vh - 64px)", // Adjust for navigation bar height
        }}
      >
        {/* Left Section: Product Details */}
        <Box sx={{ flex: 3, backgroundColor: "#fff", borderRadius: 2, padding: 3, boxShadow: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 3 }}>
            Shopping Cart
          </Typography>
          {/* Placeholder for Product Rows */}
          <Typography color="text.secondary" sx={{ marginBottom: 2 }}>
            Your cart is currently empty.
          </Typography>
          <Button
            component={Link}
            to="/new" // Link to the main page (New Page)
            sx={{ color: "blue", textTransform: "none", fontSize: 14 }}
          >
            ← Continue Shopping
          </Button>
        </Box>

        {/* Right Section: Order Summary */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: 2,
            padding: 3,
            boxShadow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 3 }}>
            Order Summary
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Items</Typography>
            <Typography>0</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total Cost
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              $0.00
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            disabled
            sx={{ textTransform: "none", marginTop: 2 }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </>
  );
}
