import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import PreviewList from "../components/previewContainer";
import Tom from "../assets/Tom_Pic.jpeg";
import Brian from "../assets/Brian_Pic.jpeg";

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
    {
      image: Brian,
      title: "Brian Francis",
      link: "https://drive.google.com/file/d/1kSnj886qJl5Zk13rcdc6zI09tGcxcRxf/view?usp=sharing",
      description:
        '"After over a year of working with Quinn I must say he is a highly motivated and driven developer that I see a lot of potential in. As his mentor I saw someone who was driven and had an appetite for learning new things. He is kind and respectful to his co-workers and has a great sense of humor. I see a lot of potential in Quinn and think he will be a great fit for any software development team."',
      buttonText: "",
      className: "hide-button",
      isDisabled: true,
      id: 2,
    },
  ]);

  return (
    <Grid
      id="References"
      className="Work-container"
      xs={12}
      sm={12}
      md={7}
      lg={7}
      mdoffset={2.5}
      lgoffset={2.5}
    >
      <h2 className="special-text header-text">References</h2>
      <br />
      <PreviewList projects={projects} />
    </Grid>
  );
}
