import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";

export default function () {
  return (
    <Grid
      id="TechnicalSkills"
      className="Work-container"
      xs={12}
      sm={12}
      md={7}
      lg={7}
      mdoffset={2.5}
      lgoffset={2.5}
    >
      <h2 className="special-text header-text hidden">Technical Skills</h2>
      <Grid
        id="ChipGrid"
        className="Chip-Grid special-text"
        marginBottom={"15px"}
      >
        <Chip
          label="ReactJS"
          variant="outlined"
          color="primary"
          className="chip"
        />
        <Chip
          label="Assembly"
          variant="outlined"
          color="primary"
          className="chip"
        />
        <Chip label="C" variant="outlined" color="primary" className="chip" />
        <Chip label="C#" variant="outlined" color="primary" className="chip" />
        <Chip label="C++" variant="outlined" color="primary" className="chip" />
        <Chip
          label="Java"
          variant="outlined"
          color="primary"
          className="chip"
        />
        <Chip
          label="JavaScript"
          variant="outlined"
          color="primary"
          className="chip"
        />
        <Chip
          label="VB.net"
          variant="outlined"
          color="primary"
          className="chip"
        />
        <Chip
          label="HTML"
          variant="outlined"
          color="primary"
          className="chip"
        />
        <Chip
          label="ASP.net"
          variant="outlined"
          color="primary"
          className="chip"
        />
        <Chip label="CSS" variant="outlined" color="primary" className="chip" />
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
