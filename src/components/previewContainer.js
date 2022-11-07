import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const PreviewList = ({ projects }) => {
  return (
    <Grid
      id="previewList"
      className="preview-list"
      container
      columnGap={2}
      rowGap={2}
    >
      {projects.map((project) => (
        <Grid
          id="preview"
          className="preview"
          key={project.id}
          item
          xs={11}
          sm={11}
          md={6}
          lg={5}
        >
          <img src={project.image} width="100%" className="preview-image" />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Button
            variant="contained"
            href={project.link}
            target="_blank"
            color="inherit"
          >
            {project.buttonText}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
export default PreviewList;
