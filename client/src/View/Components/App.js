import React from "react";
import { Outlet } from "react-router-dom";

import { useScroll } from "../Services/Scrolling";

import { Container, Box } from "@mui/system";
import * as Components from "./index.js";

const {
  Banner,
  Footer,
  Header,
  Location,
  Navbar,
  Portfolio,
  Pricing,
  Ratings,
} = Components;

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
        {/* Outlet - Enroll Modal || Review Modal */}
        <Outlet />
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
