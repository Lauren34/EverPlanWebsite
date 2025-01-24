import * as React from "react";
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/calendar"); // Navigate to the Calendar Page
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your background URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: 400,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: 4,
          borderRadius: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: "bold" }}>
          Login #10
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
          Have an account?
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 30,
            },
          }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 30,
            },
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            marginBottom: 2,
            padding: "10px 0",
            fontSize: "16px",
            backgroundColor: "#FF7F50",
            "&:hover": {
              backgroundColor: "#FF6347",
            },
            borderRadius: 30,
          }}
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <Typography
            variant="body2"
            sx={{
              cursor: "pointer",
              color: "#FF7F50",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Forgot Password
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            marginBottom: 2,
            color: "#999",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          — Or Sign In With —
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4267B2",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: 30,
              "&:hover": {
                backgroundColor: "#365899",
              },
            }}
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1DA1F2",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: 30,
              "&:hover": {
                backgroundColor: "#0d8ce0",
              },
            }}
          >
            Twitter
          </Button>
        </Box>
      </Box>
    </Box>
  );
}