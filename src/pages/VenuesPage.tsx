// import * as React from "react";
// import { Box, Grid, Card, CardContent, Typography, Modal, Button } from "@mui/material";
//
// // Define a type for the venue
// interface Venue {
//   title: string;
//   subtitle: string;
//   description: string;
// }
//
// export default function VenuesPage() {
//   // Example array of venue titles and subtitles
//   const venues: Venue[] = [
//     { title: "Venue 1", subtitle: "Subtitle 1", description: "Detailed information about Venue 1" },
//     { title: "Venue 2", subtitle: "Subtitle 2", description: "Detailed information about Venue 2" },
//     { title: "Venue 3", subtitle: "Subtitle 3", description: "Detailed information about Venue 3" },
//     { title: "Venue 4", subtitle: "Subtitle 4", description: "Detailed information about Venue 4" },
//     { title: "Venue 5", subtitle: "Subtitle 5", description: "Detailed information about Venue 5" },
//     { title: "Venue 6", subtitle: "Subtitle 6", description: "Detailed information about Venue 6" },
//     { title: "Venue 7", subtitle: "Subtitle 7", description: "Detailed information about Venue 7" },
//     { title: "Venue 8", subtitle: "Subtitle 8", description: "Detailed information about Venue 8" },
//     { title: "Venue 9", subtitle: "Subtitle 9", description: "Detailed information about Venue 9" },
//     { title: "Venue 10", subtitle: "Subtitle 10", description: "Detailed information about Venue 10" },
//     { title: "Venue 11", subtitle: "Subtitle 11", description: "Detailed information about Venue 11" },
//     { title: "Venue 12", subtitle: "Subtitle 12", description: "Detailed information about Venue 12" },
//     { title: "Venue 13", subtitle: "Subtitle 13", description: "Detailed information about Venue 13" },
//     { title: "Venue 14", subtitle: "Subtitle 14", description: "Detailed information about Venue 14" },
//     { title: "Venue 15", subtitle: "Subtitle 15", description: "Detailed information about Venue 15" },
//   ];
//
//   // Declare the type for the selectedVenue state as either null or a Venue object
//   const [selectedVenue, setSelectedVenue] = React.useState<Venue | null>(null);
//
//   const handleOpen = (venue: Venue) => {
//     setSelectedVenue(venue);
//   };
//
//   const handleClose = () => {
//     setSelectedVenue(null);
//   };
//
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         minHeight: "100vh",
//         backgroundColor: "#f5f5f5",
//         padding: 2,
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Header */}
//       <Typography
//         variant="h4"
//         sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}
//       >
//         Explore Venues
//       </Typography>
//
//       {/* Grid Layout for Boxes */}
//       <Grid container spacing={2} sx={{ justifyContent: "center" }}>
//         {/* Dynamically generate each venue box */}
//         {venues.map((venue, index) => (
//           <Grid item xs={6} key={index}>
//             <Card
//               sx={{
//                 borderRadius: 6,
//                 boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//                 overflow: "hidden",
//                 backgroundColor: "transparent",
//                 display: "flex",
//                 flexDirection: "column",
//                 height: "100%",
//               }}
//               onClick={() => handleOpen(venue)} // Open the modal on click
//             >
//               <Box
//                 sx={{
//                   width: "100%",
//                   aspectRatio: "4 / 3",
//                   backgroundColor: "#d0e7ff",
//                 }}
//               />
//               <CardContent
//                 sx={{
//                   paddingTop: 2,
//                   backgroundColor: "#fff",
//                   height: "calc(1 / 6 * 100%)",
//                   marginTop: "auto",
//                   flexShrink: 0,
//                   flexGrow: 0,
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: "bold",
//                     fontSize: "calc(1.2vw + 0.8rem)",
//                     textAlign: "center",
//                     lineHeight: 1.2,
//                     overflow: "hidden",
//                     whiteSpace: "nowrap",
//                     textOverflow: "ellipsis",
//                   }}
//                 >
//                   {venue.title}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{
//                     fontSize: "calc(0.8vw + 0.6rem)",
//                     textAlign: "center",
//                     lineHeight: 1,
//                     overflow: "hidden",
//                     whiteSpace: "nowrap",
//                     textOverflow: "ellipsis",
//                     marginTop: 1,
//                   }}
//                 >
//                   {venue.subtitle}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//
//       {/* Modal for displaying venue details */}
//       <Modal
//         open={!!selectedVenue}
//         onClose={handleClose}
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Box
//           sx={{
//             width: "85%", // Increased width to 85%
//             backgroundColor: "white",
//             padding: 3,
//             borderRadius: 2,
//             height: "40%", // Adjusted max height to 90% of the viewport height
//             overflowY: "auto", // Enables vertical scrolling
//             position: "relative",
//           }}
//         >
//           <Button
//             onClick={handleClose}
//             sx={{
//               position: "absolute",
//               top: 10,
//               right: 10,
//               fontSize: "1.5rem",
//               backgroundColor: "transparent",
//               color: "black",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             X
//           </Button>
//           <Typography variant="h4" sx={{ fontWeight: "bold" }}>
//             {selectedVenue?.title}
//           </Typography>
//           {/* Subtitle is now removed for the modal view */}
//           <Typography variant="body1" sx={{ marginBottom: 2 }}>
//             {selectedVenue?.description}
//           </Typography>
//
//           {/* Book Button moved to bottom-right corner */}
//           <Box
//             sx={{
//               position: "absolute",
//               bottom: 10,
//               right: 10,
//             }}
//           >
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#F7C5AD", // Custom button color
//                 color: "#000", // Ensures the text is visible
//                 '&:hover': {
//                   backgroundColor: "#f7b59b", // Slightly darker hover color
//                 },
//                 padding: "8px 20px", // Smaller button
//               }}
//             >
//               Book
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </Box>
//   );
// }
//
//
//
// import * as React from "react";
// import { Box, Grid, Card, CardContent, Typography, Modal, Button } from "@mui/material";
// import axios from 'axios';
//
// // Define a type for the vendor (specific to venues)
// interface Vendor {
//   title: string;
//   subtitle: string;
//   description: string;
//   vendorType: string;
// }
//
// interface VenuesPageProps {
//   selectedDate: string; // Receive the selected date as a prop
// }
//
// export default function VenuesPage({ selectedDate }: VenuesPageProps) {
//   const [venues, setVenues] = React.useState<Vendor[]>([]); // State for filtered venues
//   const [selectedVenue, setSelectedVenue] = React.useState<Vendor | null>(null); // Selected venue state
//
//   // Fetch all available vendors and filter only venues
//   const fetchAvailableVenues = async (date: string) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/available-vendors?date=${date}`);
//       console.log("API Response:", response.data); // Log API response
//       const availableVendors = response.data;
//
//       if (availableVendors.length === 0) {
//         console.log("No vendors available for the selected date.");
//       }
//
//       // Filter to get only venues
//       const filteredVenues = availableVendors
//         .filter((vendor: any) => vendor.vendorType === "Venue")
//         .map((venue: any) => ({
//           title: venue.title, // Ensure correct field mapping
//           subtitle: venue.subtitle,
//           description: venue.description || "No description available",
//           vendorType: venue.vendorType, // Ensures the type is passed along
//         }));
//
//       setVenues(filteredVenues);
//     } catch (error) {
//       console.error("Error fetching available venues:", error);
//     }
//   };
//
//   // Fetch venues when the selected date changes
//   React.useEffect(() => {
//     if (selectedDate) {
//       fetchAvailableVenues(selectedDate);
//     }
//   }, [selectedDate]);
//
//   const handleOpen = (venue: Vendor) => {
//     setSelectedVenue(venue);
//   };
//
//   const handleClose = () => {
//     setSelectedVenue(null);
//   };
//
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         minHeight: "100vh",
//         backgroundColor: "#f5f5f5",
//         padding: 2,
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Header */}
//       <Typography
//         variant="h4"
//         sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}
//       >
//         Explore Venues
//       </Typography>
//
//       {/* Grid Layout for Boxes */}
//       <Grid container spacing={2} sx={{ justifyContent: "center" }}>
//         {/* No available venues message */}
//         {venues.length === 0 ? (
//           <Typography sx={{ textAlign: "center", width: "100%" }}>
//             No available venues for the selected date.
//           </Typography>
//         ) : (
//           venues.map((venue, index) => (
//             <Grid item xs={6} key={index}>
//               <Card
//                 sx={{
//                   borderRadius: 6,
//                   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//                   overflow: "hidden",
//                   backgroundColor: "transparent",
//                   display: "flex",
//                   flexDirection: "column",
//                   height: "100%",
//                 }}
//                 onClick={() => handleOpen(venue)} // Open the modal on click
//               >
//                 <Box
//                   sx={{
//                     width: "100%",
//                     aspectRatio: "4 / 3",
//                     backgroundColor: "#d0e7ff",
//                   }}
//                 />
//                 <CardContent
//                   sx={{
//                     paddingTop: 2,
//                     backgroundColor: "#fff",
//                     height: "calc(1 / 6 * 100%)",
//                     marginTop: "auto",
//                     flexShrink: 0,
//                     flexGrow: 0,
//                   }}
//                 >
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontWeight: "bold",
//                       fontSize: "calc(1.2vw + 0.8rem)",
//                       textAlign: "center",
//                       lineHeight: 1.2,
//                       overflow: "hidden",
//                       whiteSpace: "nowrap",
//                       textOverflow: "ellipsis",
//                     }}
//                   >
//                     {venue.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{
//                       fontSize: "calc(0.8vw + 0.6rem)",
//                       textAlign: "center",
//                       lineHeight: 1,
//                       overflow: "hidden",
//                       whiteSpace: "nowrap",
//                       textOverflow: "ellipsis",
//                       marginTop: 1,
//                     }}
//                   >
//                     {venue.subtitle}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>
//
//       {/* Modal for displaying venue details */}
//       <Modal
//         open={!!selectedVenue}
//         onClose={handleClose}
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Box
//           sx={{
//             width: "85%",
//             backgroundColor: "white",
//             padding: 3,
//             borderRadius: 2,
//             height: "40%",
//             overflowY: "auto",
//             position: "relative",
//           }}
//         >
//           <Button
//             onClick={handleClose}
//             sx={{
//               position: "absolute",
//               top: 10,
//               right: 10,
//               fontSize: "1.5rem",
//               backgroundColor: "transparent",
//               color: "black",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             X
//           </Button>
//           <Typography variant="h4" sx={{ fontWeight: "bold" }}>
//             {selectedVenue?.title}
//           </Typography>
//           <Typography variant="body1" sx={{ marginBottom: 2 }}>
//             {selectedVenue?.description}
//           </Typography>
//
//           {/* Book Button moved to bottom-right corner */}
//           <Box
//             sx={{
//               position: "absolute",
//               bottom: 10,
//               right: 10,
//             }}
//           >
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#F7C5AD",
//                 color: "#000",
//                 '&:hover': {
//                   backgroundColor: "#f7b59b",
//                 },
//                 padding: "8px 20px",
//               }}
//             >
//               Book
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </Box>
//   );
// }

// import { useEffect, useState } from "react";
// import axios from "axios";
//
// interface Venue {
//   vendorId: number;
//   vendorName: string;
//   vendorTypeId: number;
// }
//
// const VenuesPage: React.FC = () => {
//   const [venues, setVenues] = useState<Venue[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//
//   useEffect(() => {
//     const fetchAvailableVenues = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//
//         const selectedDate = localStorage.getItem("selectedDate");
//         if (!selectedDate) {
//           setError("No date selected.");
//           setLoading(false);
//           return;
//         }
//
//         const response = await axios.get<Venue[]>(
//             `http://localhost:5000/api/available-venues?date=${selectedDate}`
//         );
//         setVenues(response.data);
//       } catch (error) {
//         setError("Failed to fetch available venues. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     fetchAvailableVenues();
//   }, []);
//
//   return (
//     <div>
//       <h1>Available Venues</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <ul>
//         {venues.map((venue) => (
//           <li key={venue.vendorId}>{venue.vendorName}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//
// export default VenuesPage;
//


import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Card, CardContent, Typography, Modal, Button } from "@mui/material";

interface Venue {
  vendorId: number;
  title: string;
  subtitle: string;
  description: string;
}

const VenuesPage: React.FC = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null); // Selected venue state
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvailableVenues = async () => {
      try {
        setLoading(true);
        setError(null);

        const selectedDate = localStorage.getItem("selectedDate");
        if (!selectedDate) {
          setError("No date selected.");
          setLoading(false);
          return;
        }

        const response = await axios.get<Venue[]>(
          `http://localhost:5000/api/available-venues?date=${selectedDate}`
        );
        console.log("API Response:", response.data); // Log API response
        const availableVendors = response.data;

        if (availableVendors.length === 0) {
          setError("No available venues for the selected date.");
        }

        setVenues(availableVendors);
      } catch (error) {
        setError("Failed to fetch available venues. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableVenues();
  }, []);

  const handleOpen = (venue: Venue) => {
    setSelectedVenue(venue);
  };

  const handleClose = () => {
    setSelectedVenue(null);
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
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}>
        Explore Venues
      </Typography>

      {/* Loading, Error */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Grid Layout for Boxes */}
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {/* No available venues message */}
        {venues.length === 0 ? (
          <Typography sx={{ textAlign: "center", width: "100%" }}>
            No available venues for the selected date.
          </Typography>
        ) : (
          venues.map((venue, index) => (
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
                onClick={() => handleOpen(venue)} // Open the modal on click
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
                    {venue.title}
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
                    {venue.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {/* Modal for displaying venue details */}
      <Modal
        open={!!selectedVenue}
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
            {selectedVenue?.title}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {selectedVenue?.description}
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
                backgroundColor: "#F7C5AD",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#f7b59b",
                },
                padding: "8px 20px",
              }}
            >
              Book
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default VenuesPage;
