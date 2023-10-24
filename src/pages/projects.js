import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import PreviewList from "../components/previewContainer";
import BitmojiLaptop from "../assets/Quinn_Laptop_High.png";
import FlashDrive from "../assets/Flash-Drive.png";
import Multithreading from "../assets/Multithreading.jpeg";
import Todo from "../assets/ss_todo.png"
import BioLogo from "../assets/bioLogo.jpg"
import COLogo from "../assets/Crystal_Orchard_logo.png"

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
      image: COLogo,
      title: "Crystal Orchard Website",
      link: "https://the-crystal-orchard.vercel.app/",
      description: "A website that utilizes Nextjs, Typescript, TailwindCSS, and SQLite.",
      buttonText: "View Website",
      id: 2,
    },
    {
      image: Todo,
      title: "To-Do List",
      link: "https://github.com/quinnhipp/todo-list",
      description: "To-Do App that utilizes Nextjs, Typescript, TailwindCSS, and SQLite.",
      buttonText: "View on Github",
      id: 3,
    },
    {
      image: BioLogo,
      title: "Biohazard Printing Website",
      link: "https://www.biohazardprinting.com/",
      description: "A website that utilizes Nextjs, Typescript, TailwindCSS, and SQLite.",
      buttonText: "View Website",
      id: 4,
    },
    {
      image: Multithreading,
      title: "Multithreading Applications",
      link: "https://github.com/quinnhipp/Multithreading-Applications",
      description:
        "Implementation of POSIX-Pthreads to multi-thread Quicksort for sorting huge lists.",
      buttonText: "View on Github",
      id: 6,
    },
    {
      image: FlashDrive,
      title: "FAT32",
      link: "https://github.com/quinnhipp/FAT32",
      description: "Created a FAT32 structure from scratch in Linux",
      buttonText: "View on Github",
      id: 7,
    },
  ]);

  return (
    <Grid
      id="Projects"
      className="Work-container"
      xs={12}
      sm={12}
      md={7}
      lg={7}
      mdoffset={2.5}
      lgoffset={2.5}
    >
      <h2 className="special-text header-text">Projects</h2>
      <PreviewList projects={projects} />
    </Grid>
  );
}
