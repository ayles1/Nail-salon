import { Container, Box } from "@mui/system";
import React from "react";
import { useScroll } from "../Services/Scrolling";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Location from "./Location";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Ratings from "./RatingTab/Ratings";

const App = () => {
  const { handleScroll } = useScroll();

  return (
    <Box
      onScroll={() => {
        handleScroll();
      }}
      sx={{
        maxHeight: "100vh",
        overflowY: "scroll",
        position: "relative",
      }}
    >
      <Container>
        <Header />
        <Navbar />
        <Banner />
        <Portfolio />
        <Pricing />
        <Ratings />
        <Location />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;

// Main color : #E0F5FF
