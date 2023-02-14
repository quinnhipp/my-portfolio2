import Grid from "@mui/material/Unstable_Grid2";
import GradPhoto from "../assets/Grad_Photo.jpeg";
import OrderPhoto from "../assets/OrderOfTheEngineer.jpg";

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
      <h2 className="special-text header-text hidden">About Me</h2>
      <br />

      <p>
        I am a recent graduate of the University of Toledo with a degree in{" "}
        <span className="special-text">Computer Science and Engineering</span>{" "}
        and an alumni of{" "}
        <a href="https://triangle.org" className="special-text" target="_blank">
          Triangle
        </a>
        .
        <br />
        <br />
        <img
          src={GradPhoto}
          alt="Me at graduation."
          className="preview-image"
          width="50%"
        />
        <img
          src={OrderPhoto}
          alt="Me at the University of Toledo Order of the Engineer Induction Ceremony"
          className="preview-image"
          width="50%"
        />
        <br />
        <br />I am currently in search of a full-time software developer
        position.
      </p>
    </Grid>
  );
}
