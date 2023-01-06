import Grid from "@mui/material/Unstable_Grid2";

export default function () {
  return (
    <Grid
      id="AboutMe"
      className="Work-container"
      xs={12}
      sm={12}
      md={7}
      lg={7}
      mdoffset={2.5}
      lgoffset={2.5}
    >
      <h2 className="special-text header-text">About Me</h2>
      <br />

      <p>
        I am a recent graduate of the University of Toledo with a degree in{" "}
        <span className="special-text">Computer Science and Engineering.</span>
        <br />
        <br />I am currently in search of a full-time software developer
        position.
      </p>
    </Grid>
  );
}
