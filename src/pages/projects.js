import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import PreviewList from "../components/previewContainer";
import BitmojiLaptop from "../assets/Quinn_Laptop_High.png";
import FlashDrive from "../assets/Flash-Drive.png";
import Multithreading from "../assets/Multithreading.jpeg";

export default function () {
  const [projects, setProjects] = useState([
    {
      image: BitmojiLaptop,
      title: "My CV",
      link: "https://qhipp.dev",
      description: "Web site created in React to display my portfolio",
      buttonText: "",
      className: "hide-button",
      isDisabled: true,
      id: 1,
    },
    {
      image: Multithreading,
      title: "Multithreading Applications",
      link: "https://github.com/quinnhipp/Multithreading-Applications",
      description:
        "Implementation of POSIX-Pthreads to multi-thread Quicksort for sorting huge lists.",
      buttonText: "View on Github",
      id: 2,
    },
    {
      image: FlashDrive,
      title: "FAT32",
      link: "https://github.com/quinnhipp/FAT32",
      description: "Created a FAT32 structure from scratch in Linux",
      buttonText: "View on Github",
      id: 3,
    },
  ]);

  return (
    <Grid id="Projects" className="Work-container">
      <h2 className="special-text header-text">Projects</h2>
      <PreviewList projects={projects} />
    </Grid>
  );
}
