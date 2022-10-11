import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import ProjectList from "../components/projectContainer";
import Tom from "../assets/Tom_Pic.jpeg";

export default function () {
  const [projects, setProjects] = useState([
    {
      image: Tom,
      title: "Thomas Welch",
      link: "https://github.com/quinnhipp/FAT32",
      description:
        "Quinn is a hard worker, detail-oriented, and reliable. He is highly intelligent and has great analytical skills with the commitment to implement the best possible solution. In my observation, I believe him to be trusted in critical situations as he is cautious, as well as holds the capacity to complete tasks with minimum guidance. He has always been willing to try unfamiliar tasks and apply his skills in new ways. Quinn has consistently submitted quality deliverables on time.",
      id: 1,
    },
  ]);
  return (
    <Grid id="WorkExperience" className="Work-container">
      <h2 className="special-text header-text">Work Experience</h2>
      <br />
      <a
        href="https://cloud-cme.com"
        rel="noreferrer"
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
        Learned and worked in an agile environment incorporating JIRA and Asana.
        <br />
        <br />
        Worked with Microsoft SQL Server Management Studio to create and modify
        stored procedures.
        <br />
        <br />
        Imported and created custom templates using Frevvo forms.
        <br />
        <br />
        Researched and developed coding projects and presented a technical
        presentation for implementation.
        <br />
        <br />
        Researched and developed automated testing using Cypress.
        <br />
        <br />
        Tested code and sites as part of the Quality Control process for
        implementation to a production environment.
      </p>
      <ProjectList projects={projects} />
    </Grid>
  );
}
