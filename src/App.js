import "./assets/App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Skills from "./pages/skills";
import Education from "./pages/education";
import Projects from "./pages/projects";
import References from "./pages/references";
import Contact from "./pages/contact";
import RightNav from "./layouts/rightNav";
import LeftSocials from "./layouts/leftSocials";
import MenuDial from "./layouts/menuDial";
import BottomSocials from "./layouts/bottomSocials";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="body">
      <Box>
        <MenuDial />
        <Grid
          id="Everything"
          container
          justifyContent={"center"}
          className="grid-container grid-column"
        >
          <LeftSocials />
          <RightNav />
          <Home />
          <About />
          <Work />
          <Skills />
          <Education />
          <Projects />
          <References />
          {/* <Contact /> */}
          <BottomSocials />
        </Grid>
      </Box>
    </div>
  );
}

export default App;
