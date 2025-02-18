import * as React from "react";
import { Box } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import NavigationBar from "./NavigationBar";
import HomePage from "./HomePage";
import VenuesPage from "./VenuesPage";
import CaterersPage from "./CaterersPage";  // Import Caterers Page
import HairPage from "./HairPage";
import MakeupPage from "./MakeupPage";
import PhotographersPage from "./PhotographersPage";
import MusicPage from "./MusicPage";
import FloristPage from "./FloristPage";
import DresserPage from "./DresserPage";
import PlannerPage from "./PlannerPage";

export default function NewPage() {
  const [activePage, setActivePage] = React.useState(0);

  // Handle page changes from the NavigationBar by page name (string)
  const handlePageChange = (page: string) => {
    switch (page) {
      case "home":
        setActivePage(0);
        break;
      case "venues":
        setActivePage(1);
        break;
      case "caterers":  // Added Caterers case
        setActivePage(2);
        break;
      case "hair":
        setActivePage(3);
        break;
      case "makeup":
        setActivePage(4);
        break;
      case "photographers":
        setActivePage(5);
        break;
      case "music":
        setActivePage(6);
        break;
      case "florist":
        setActivePage(7);
        break;
      case "dresser":
        setActivePage(8);
        break;
      case "planner":
        setActivePage(9);
        break;
      default:
        setActivePage(0); // Default to home
    }

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  // Handle home icon click event
  const handleHomeIconClick = () => {
    setActivePage(0);  // Set active page to Home when the Home icon is clicked
    window.scrollTo(0, 0);  // Scroll to the top
  };

  // Setup swipe functionality
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activePage < 9) {  // Adjusted max index for new tab
        setActivePage(activePage + 1); // Swipe left to go forward in the navbar
      }
    },
    onSwipedRight: () => {
      if (activePage > 0) {
        setActivePage(activePage - 1); // Swipe right to go backward in the navbar
      }
    },
    trackMouse: true,  // Optional: enables mouse swipe on desktop
  });

  // Render the appropriate content based on the activePage
  const renderContent = () => {
    switch (activePage) {
      case 1:
        return <VenuesPage />;
      case 2:
        return <CaterersPage />;  // Render CaterersPage
      case 3:
        return <HairPage />;
      case 4:
        return <MakeupPage />;
      case 5:
        return <PhotographersPage />;
      case 6:
        return <MusicPage />;
      case 7:
        return <FloristPage />;
      case 8:
        return <DresserPage />;
      case 9:
        return <PlannerPage />;
      case 0: // HomePage is the default when the app is loaded
      default:
        return <HomePage onSelect={handlePageChange} />;
    }
  };

  return (
    <>
      <NavigationBar onSelect={handlePageChange} activePage={activePage} onHomeIconClick={handleHomeIconClick} />
      {/* Main content wrapped with paddingTop */}
      <Box
        {...handlers}  // Add swipe handlers to the content container
        sx={{
          padding: 4,
          paddingBottom: "60px",
          paddingTop: "80px",
          minHeight: "calc(100vh - 60px)", // Adjust for the navbar height
          overflowY: "auto",  // Allow scrolling within this container
        }}
      >
        {renderContent()} {/* Content rendered here based on active page */}
      </Box>
    </>
  );
}
