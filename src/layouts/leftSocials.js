import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function () {
  return (
    <div
      id="LeftSide"
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      left={0}
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
    </div>
  );
}
