import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";

export default function () {
  return (
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
  );
}
