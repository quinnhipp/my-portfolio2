import Grid from "@mui/material/Grid";

const ProjectList = ({ projects }) => {
  return (
    <Grid id="projectList" className="project-list" container>
      {projects.map((project) => (
        <Grid
          id="projectPreview"
          className="project-preview"
          key={project.id}
          item
          xs={11}
          sm={11}
          md={6}
          lg={5}
        >
          <img src={project.image} width="100%" className="project-image" />
          <h2>
            <a href={project.link} target="_blank" className="link">
              {project.title}
            </a>
          </h2>
          <p>{project.description}</p>
        </Grid>
      ))}
    </Grid>
  );
};
export default ProjectList;
