import * as React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
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
        backgroundImage: "url('/Background13.jpg')", // Update with your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 250, // Match the text field and button width
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Optional: slight contrast for readability
          borderRadius: 2,
          padding: 3,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Dancing Script', cursive", // Script font
            fontWeight: "bold",
            color: "#b56f76",
            marginBottom: 2,
          }}
        >
          LOG IN
        </Typography>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          sx={{
            marginBottom: 2,
            backgroundColor: "#fff",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
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
            backgroundColor: "#fff",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
        <Typography
          variant="body2"
          sx={{
            marginBottom: 2,
            cursor: "pointer",
            color: "DEB64B",
            textDecoration: "underline",
            fontSize: { xs: "0.8rem", sm: "1rem" },
          }}
        >
          Forgot your password?
        </Typography>
        <Button
          fullWidth
          variant="contained"
          sx={{
            marginBottom: 2,
            padding: "8px 0", // Smaller height
            backgroundColor: "#b56f76",
            color: "#fff",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#b56f76",
            },
          }}
          onClick={handleLogin}
        >
          LOG IN
        </Button>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            fontWeight: "bold",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            color: "#999",
          }}
        >
          OR
        </Typography>
        <Button
          fullWidth
          variant="contained"
          sx={{
            padding: "8px 0", // Smaller height
            backgroundColor: "#b56f76",
            color: "#fff",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#b56f76",
            },
          }}
          onClick={() => navigate("/vendors")} // Navigate to VendorsPage when clicked
        >
          SIGN UP
        </Button>
      </Box>
    </Box>
  );
}



// import * as React from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
//
// export default function LoginPage() {
//   const navigate = useNavigate();
//
//   const handleLogin = () => {
//     navigate("/calendar"); // Navigate to the Calendar Page
//   };
//
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "100vh",
//         backgroundImage: "url('/Background13.jpg')", // Update with your background image
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 2,
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           maxWidth: 250, // Match the text field and button width
//           backgroundColor: "rgba(255, 255, 255, 0.9)", // Optional: slight contrast for readability
//           borderRadius: 2,
//           padding: 3,
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             fontFamily: "'Dancing Script', cursive", // Script font
//             fontWeight: "bold",
//             color: "#b56f76",
//             marginBottom: 2,
//           }}
//         >
//           LOG IN
//         </Typography>
//         <TextField
//           fullWidth
//           label="Username"
//           variant="outlined"
//           sx={{
//             marginBottom: 2,
//             backgroundColor: "#fff",
//             "& .MuiOutlinedInput-root": {
//               borderRadius: 2,
//             },
//           }}
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           type="password"
//           variant="outlined"
//           sx={{
//             marginBottom: 2,
//             backgroundColor: "#fff",
//             "& .MuiOutlinedInput-root": {
//               borderRadius: 2,
//             },
//           }}
//         />
//         <Typography
//           variant="body2"
//           sx={{
//             marginBottom: 2,
//             cursor: "pointer",
//             color: "DEB64B",
//             textDecoration: "underline",
//             fontSize: { xs: "0.8rem", sm: "1rem" },
//           }}
//         >
//           Forgot your password?
//         </Typography>
//         <Button
//           fullWidth
//           variant="contained"
//           sx={{
//             marginBottom: 2,
//             padding: "8px 0", // Smaller height
//             backgroundColor: "#b56f76",
//             color: "#fff",
//             borderRadius: 2,
//             "&:hover": {
//               backgroundColor: "#b56f76",
//             },
//           }}
//           onClick={handleLogin}
//         >
//           LOG IN
//         </Button>
//         <Typography
//           variant="body1"
//           sx={{
//             marginBottom: 2,
//             fontWeight: "bold",
//             fontSize: { xs: "0.9rem", sm: "1rem" },
//             color: "#999",
//           }}
//         >
//           OR
//         </Typography>
//         <Button
//           fullWidth
//           variant="contained"
//           sx={{
//             padding: "8px 0", // Smaller height
//             backgroundColor: "#b56f76",
//             color: "#fff",
//             borderRadius: 2,
//             "&:hover": {
//               backgroundColor: "#b56f76",
//             },
//           }}
//         >
//           SIGN UP
//         </Button>
//       </Box>
//     </Box>
//   );
// }
//
