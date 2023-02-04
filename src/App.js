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
import { useEffect } from "react";

function App() {
  // document.getElementById("RightSide").addEventListener("wheel", function (e) {
  //   e.preventDefault();
  //   document.getElementById("Everything").scrollTop += e.deltaY * 10;
  // });

  // var el = document.getElementById("RightSide");
  // if (el) {
  //   el.addEventListener("wheel", function (e) {
  //     e.preventDefault();
  //     document.getElementById("Everything").scrollTop += e.deltaY * 10;
  //   });
  // }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

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
