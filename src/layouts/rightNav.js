import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

export default function () {
  const [isActive, setIsActive] = useState("#Home");
  const hash = window.location.hash;
  return (
    <Grid
      id="RightSide"
      item
      xs={12}
      sm={12}
      md={3}
      lg={3}
      className="grid-column"
      textAlign={"right"}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <a
        href="#Home"
        className={isActive === "#Home" ? "nav-link-active" : "nav-link"}
        onClick={() => setIsActive("#Home")}
      >
        Home
      </a>
      <br />
      <br />
      <a
        href="#AboutMe"
        className={isActive === "#AboutMe" ? "nav-link-active" : "nav-link"}
        onClick={() => setIsActive("#AboutMe")}
      >
        About Me
      </a>
      <br />
      <br />
      <a
        href="#WorkExperience"
        className={isActive === "#Work" ? "nav-link-active" : "nav-link"}
        onClick={() => setIsActive("#Work")}
      >
        Work Experience
      </a>
      <br />
      <br />
      <a
        href="#TechnicalSkills"
        className={isActive === "#Skills" ? "nav-link-active" : "nav-link"}
        onClick={() => setIsActive("#Skills")}
      >
        Technical Skills
      </a>
      <br />
      <br />
      <a
        href="#Education"
        className={isActive === "#Education" ? "nav-link-active" : "nav-link"}
        onClick={() => setIsActive("#Education")}
      >
        Education
      </a>
      <br />
      <br />
      <a
        href="#Projects"
        className={isActive === "#Projects" ? "nav-link-active" : "nav-link"}
        onClick={() => setIsActive("#Projects")}
      >
        Projects
      </a>
    </Grid>
  );
}