import Grid from "@mui/material/Unstable_Grid2";

export default function () {
  return (
    <Grid id="Projects" className="Work-container">
      <h2 className="special-text header-text">Projects</h2>

      <p>
        <a
          href="https://github.com/quinnhipp/Multithreading-Applications"
          target={"_blank"}
          className="link"
        >
          <strong>Multithreading-Applications</strong>
        </a>
        <br />
        <a
          href="https://github.com/quinnhipp/FAT32"
          target={"_blank"}
          className="link"
        >
          <strong>FAT32</strong>
        </a>
      </p>
    </Grid>
  );
}
