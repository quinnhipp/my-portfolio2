import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import PreviewList from "../components/previewContainer";
import Tom from "../assets/Tom_Pic.jpeg";

export default function () {
  const [projects, setProjects] = useState([
    {
      image: Tom,
      title: "Thomas Welch",
      link: "https://drive.google.com/file/d/1kSnj886qJl5Zk13rcdc6zI09tGcxcRxf/view?usp=sharing",
      description:
        '"Quinn is a hard worker, detail-oriented, and reliable. He is highly intelligent and has great analytical skills with the commitment to implement the best possible solution. In my observation, I believe him to be trusted in critical situations as he is cautious, as well as holds the capacity to complete tasks with minimum guidance. He has always been willing to try unfamiliar tasks and apply his skills in new ways. Quinn has consistently submitted quality deliverables on time."',
      buttonText: "View Full Reference",
      id: 1,
    },
  ]);

  return (
    <Grid id="References" className="Work-container">
      <h2 className="special-text header-text">References</h2>
      <br />
      <PreviewList projects={projects} />
    </Grid>
  );
}
