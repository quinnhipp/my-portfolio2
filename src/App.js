import logo from "./logo.svg";
import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";
import { useState } from "react";
import { getPath } from "@mui/system";

function App() {
  const [isActive, setIsActive] = useState("#Home");
  const hash = window.location.hash;

  return (
    <div className="body">
      <Box>
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
            md={2}
            lg={2}
            className="grid-column"
          ></Grid>
          <Grid
            id="Body"
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
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

            <Grid id="Education" className="App-header">
              <p>
                Hello, my name is <span className="special-text">Quinn</span>.
              </p>
            </Grid>

            <Grid id="Projects" className="App-header">
              <p>
                Hello, my name is <span className="special-text">Quinn</span>.
              </p>
            </Grid>
          </Grid>
          <Grid
            id="RightSide"
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
            className="grid-column"
            textAlign={"right"}
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
