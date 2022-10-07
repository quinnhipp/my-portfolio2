import Grid from "@mui/material/Unstable_Grid2";

export default function () {
  return (
    <Grid id="WorkExperience" className="Work-container">
      <h2 className="special-text header-text">Work Experience</h2>
      <br />
      <a href="https://cloud-cme.com" target={"_blank"} className="link">
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
    </Grid>
  );
}
