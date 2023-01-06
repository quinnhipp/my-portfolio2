import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import AboutIcon from "@mui/icons-material/PersonOutline";
import WorkIcon from "@mui/icons-material/WorkOutlineOutlined";
import EducationIcon from "@mui/icons-material/SchoolOutlined";
import ProjectsIcon from "@mui/icons-material/Code";
import SkillsIcon from "@mui/icons-material/PsychologyOutlined";
import ContactIcon from "@mui/icons-material/ContactMailOutlined";

const actions = [
  { icon: <HomeIcon />, name: "Home", href: "#Home" },
  { icon: <AboutIcon />, name: "About Me", href: "#AboutMe" },
  { icon: <WorkIcon />, name: "Work Experience", href: "#WorkExperience" },
  { icon: <SkillsIcon />, name: "Technical Skills", href: "#TechnicalSkills" },
  { icon: <EducationIcon />, name: "Education", href: "#Education" },
  { icon: <ProjectsIcon />, name: "Projects", href: "#Projects" },
  { icon: <ContactIcon />, name: "References", href: "#References" },
];

export default function () {
  return (
    <Box
      sx={{
        height: 75,
        width: 75,
        transform: "translateZ(0px)",
        flexGrow: 1,
        display: { xs: "block", sm: "block", md: "none" },
        position: "fixed",
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", top: 16, left: 16 }}
        icon={<SpeedDialIcon />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.href}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
