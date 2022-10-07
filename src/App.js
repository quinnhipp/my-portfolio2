import logo from "./assets/logo.svg";
import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";
import { getPath } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createTheme } from "@mui/material/styles";

import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Skills from "./pages/skills";
import Education from "./pages/education";
import Projects from "./pages/projects";
import RightNav from "./layouts/rightNav";
import LeftSocials from "./layouts/leftSocials";
import bottomSocials from "./layouts/bottomSocials";
import MenuDial from "./layouts/menuDial";
import BottomSocials from "./layouts/bottomSocials";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <div className="body">
      <Box>
        <MenuDial />
        <Grid
          id="Everything"
          container
          justifyContent={"center"}
          className="grid-container"
        >
          <LeftSocials />
          <Grid
            id="Pages"
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="grid-column"
          >
            <Home />
            <About />
            <Work />
            <Skills />
            <Education />
            <Projects />
            <BottomSocials />
          </Grid>
          <RightNav />
        </Grid>
      </Box>
    </div>
  );
}

export default App;
