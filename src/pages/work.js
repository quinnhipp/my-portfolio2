import Grid from "@mui/material/Unstable_Grid2";

export default function () {
  return (
    <Grid
      id="WorkExperience"
      className="Work-container"
      xs={12}
      sm={12}
      md={7}
      lg={7}
      mdoffset={2.5}
      lgoffset={2.5}
    >
      <h2 className="special-text header-text">Work Experience</h2>
      <br />
      <a
        href="https://www.norwalktruckers.net/norwalkhighschool_home.aspx"
        rel="noreferrer"
        target={"_blank"}
        className="link"
      >
        <strong>Norwalk High School</strong>
      </a>
      <span className="special-text text">
        <i>Long-Term Substitute Teacher</i>
      </span>
      <span className="text">December 2022 - Present</span>
      <br />
      <br />
      <p className="text">
        AP Computer Science, Computer Science Principles, Algebra II Teacher.
        <br />
        <br />
        Utilized Java and Python to write programs.
        <br />
        <br />
        Taught material aligned with the APCS curriculum.
        <br />
        <br />
        Created lesson plans and differentiated instruction.
      </p>
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
      <br />
      <br />
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
