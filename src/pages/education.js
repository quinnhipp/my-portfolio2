import Grid from "@mui/material/Unstable_Grid2";

export default function () {
  return (
    <Grid
      id="Education"
      className="Work-container"
      xs={12}
      sm={12}
      md={7}
      lg={7}
      mdoffset={2.5}
      lgoffset={2.5}
    >
      <h2 className="special-text header-text">Education</h2>
      <a href="http://utoledo.edu" className="link large-text">
        University of Toledo
      </a>
      <h3>
        <i>Bachelor of Science: Computer Science and Engineering</i>
      </h3>
      <p className="text"> Graduation Date: December 2022</p>
      <br />
      <p className="text">President's List: Summer 2020</p>
      <p className="text">Dean's List: Spring 2021</p>
    </Grid>
  );
}
