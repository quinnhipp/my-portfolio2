import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function () {
  return (
    <Grid
      id="LeftSide"
      item
      xs={12}
      sm={12}
      md={3}
      lg={3}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <a
        href="https://github.com/quinnhipp"
        className="github social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} size="4x" />
      </a>
      <a
        href="https://www.linkedin.com/in/quinnlanhipp/"
        className="linkedin social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
      </a>
    </Grid>
  );
}
