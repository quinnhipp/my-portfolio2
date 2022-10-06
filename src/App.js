import logo from "./logo.svg";
import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";
import { useState } from "react";
import { getPath } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createTheme } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import AboutIcon from "@mui/icons-material/PersonOutline";
import WorkIcon from "@mui/icons-material/WorkOutlineOutlined";
import EducationIcon from "@mui/icons-material/SchoolOutlined";
import ProjectsIcon from "@mui/icons-material/Code";
import SkillsIcon from "@mui/icons-material/PsychologyOutlined";

const actions = [
  { icon: <HomeIcon />, name: "Home", href: "#Home" },
  { icon: <AboutIcon />, name: "About Me", href: "#AboutMe" },
  { icon: <WorkIcon />, name: "Work Experience", href: "#WorkExperience" },
  { icon: <SkillsIcon />, name: "Technical Skills", href: "#TechnicalSkills" },
  { icon: <EducationIcon />, name: "Education", href: "#Education" },
  { icon: <ProjectsIcon />, name: "Projects", href: "#Projects" },
];

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

// import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faGithub,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// const theme = createTheme({
//   palette: {
//     primary: "#00bcd4",
//     secondary: "#ff4081",
//   },
// });

function App() {
  const [isActive, setIsActive] = useState("#Home");
  const hash = window.location.hash;

  return (
    <div className="body">
      <Box>
        <Box
          sx={{
            height: 75,
            width: 75,
            transform: "translateZ(0px)",
            flexGrow: 1,
            display: { xs: "block", sm: "block", md: "none" },
            position: "fixed",
          }}
        >
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", top: 16, left: 16 }}
            icon={<SpeedDialIcon />}
            direction="down"
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                href={action.href}
              />
            ))}
          </SpeedDial>
        </Box>
        <Grid
          id="Everything"
          container
          justifyContent={"center"}
          className="grid-container"
        >
          <Grid
            id="LeftSide"
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            className="grid-column"
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            {/* <a
              href="https://github.com/quinnhipp"
              className="github social"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/quinnlanhipp/"
              className="linkedin social"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a> */}
          </Grid>
          <Grid
            id="Body"
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="grid-column"
          >
            <Grid id="Home" className="App-header">
              <p className="large-text">
                Hello, my name is <span className="special-text">Quinn</span>
              </p>
            </Grid>

            <Grid id="AboutMe" className="App-header">
              <p>
                I am currently a senior at the University of Toledo majoring in{" "}
                <span className="special-text">
                  Computer Science and Engineering
                </span>{" "}
                in search of a full-time position starting in January 2023.
              </p>
            </Grid>

            <Grid id="WorkExperience" className="Work-container">
              <h2 className="special-text header-text">Work Experience</h2>
              <br />
              <a
                href="https://cloud-cme.com"
                target={"_blank"}
                className="link"
              >
                <strong>CLOUDCME</strong>
              </a>
              <span className="special-text text">
                <i>Software Developer Intern</i>
              </span>
              <span className="text">January 2020 - May 2022</span>
              <p className="text">
                Completed multiple project assignments in VB.net.
                <br />
                <br />
                Learned and worked in an agile environment incorporating JIRA
                and Asana.
                <br />
                <br />
                Worked with Microsoft SQL Server Management Studio to create and
                modify stored procedures.
                <br />
                <br />
                Imported and created custom templates using Frevvo forms.
                <br />
                <br />
                Researched and developed coding projects and presented a
                technical presentation for implementation.
                <br />
                <br />
                Researched and developed automated testing using Cypress.
                <br />
                <br />
                Tested code and sites as part of the Quality Control process for
                implementation to a production environment.
              </p>
            </Grid>
            <Grid id="TechnicalSkills" className="Work-container">
              <h2 className="special-text header-text">Technical Skills</h2>
              <Grid id="ChipGrid" className="Chip-Grid special-text">
                <Chip label="ReactJS" variant="outlined" color="primary" />
                <Chip label="Assembly" variant="outlined" color="primary" />
                <Chip label="C" variant="outlined" color="primary" />
                <Chip label="C#" variant="outlined" color="primary" />
                <Chip label="C++" variant="outlined" color="primary" />
                <Chip label="Java" variant="outlined" color="primary" />
                <Chip label="JavaScript" variant="outlined" color="primary" />
                <Chip label="VB.net" variant="outlined" color="primary" />
                <Chip label="HTML" variant="outlined" color="primary" />
                <Chip label="ASP.net" variant="outlined" color="primary" />
                <Chip label="CSS" variant="outlined" color="primary" />
              </Grid>
              <p className="text">
                ReactJS
                <br />
                <br />
                Automated Testing/Cypress.io
                <br />
                <br />
                Familiar with Github subversion
                <br />
                <br />
                Translating technical jargon to non-developer stakeholders
                <br />
                <br />
                Excellent communication skills
                <br />
                <br />
                Advanced problem solving
                <br />
                <br />
                Extremely coachable
                <br />
                <br />
                Thrives in a team environment
              </p>
            </Grid>

            <Grid id="Education" className="Work-container">
              <h2 className="special-text header-text">Education</h2>
              <a href="http://utoledo.edu" className="link large-text">
                University of Toledo
              </a>
              <h3>
                <i>Bachelor of Science: Computer Science and Engineering</i>
              </h3>
              <p className="text"> Anticipated graduation: December 2022.</p>
              <br />
              <p className="text">President's List: Summer 2020</p>
              <p className="text">Dean's List: Spring 2021</p>
            </Grid>

            <Grid id="Projects" className="Work-container">
              <h2 className="special-text header-text">Projects</h2>

              <p>
                <a
                  href="https://github.com/quinnhipp/Multithreading-Applications"
                  target={"_blank"}
                  className="link"
                >
                  <strong>Multithreading-Applications</strong>
                </a>
                <br />
                <a
                  href="https://github.com/quinnhipp/FAT32"
                  target={"_blank"}
                  className="link"
                >
                  <strong>FAT32</strong>
                </a>
              </p>
            </Grid>
          </Grid>
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
              className={
                isActive === "#AboutMe" ? "nav-link-active" : "nav-link"
              }
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
              className={
                isActive === "#Skills" ? "nav-link-active" : "nav-link"
              }
              onClick={() => setIsActive("#Skills")}
            >
              Technical Skills
            </a>
            <br />
            <br />
            <a
              href="#Education"
              className={
                isActive === "#Education" ? "nav-link-active" : "nav-link"
              }
              onClick={() => setIsActive("#Education")}
            >
              Education
            </a>
            <br />
            <br />
            <a
              href="#Projects"
              className={
                isActive === "#Projects" ? "nav-link-active" : "nav-link"
              }
              onClick={() => setIsActive("#Projects")}
            >
              Projects
            </a>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
