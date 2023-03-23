import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CardActionArea } from "@mui/material";

function Projects() {
  const [index, setIndex] = useState(0);

  const projectsInfo = [
    {
      name: "GitHub Stats",
      description: "Page created using React & MUI",
      img: "https://user-images.githubusercontent.com/85148186/189246353-7750b2a0-e320-46a7-b4b7-1b0702c8440b.png",
      url: "https://github.com/ManuMxrales/Curso-MaterialUI",
    },
    {
      name: "WebComponent Product Card",
      description:
        "A good looking product card you can use to display beautiful products",
      img: "https://user-images.githubusercontent.com/85148186/178544215-797c04a1-3147-41e2-83ac-d688ea8da4e6.png",
      url: "https://manumxrales.github.io/Web-Component_Product-Card/",
    },
    {
      name: "Responsive Website",
      description:
        "Responsive Design web-page using HTML & CSS phone tablet and desktop friendly",
      img: "https://user-images.githubusercontent.com/85148186/157994735-2e5b7314-6f8c-4a90-b1e1-c2f8a16e2186.png",
      url: "https://manumxrales.github.io/Responsive-Design/",
    },
  ];
  const paginationLeft = () => {
    index - 1 < 0 ? setIndex(0) : setIndex(index - 1);
  };
  const paginationRight = () => {
    index + 1 > projectsInfo.length - 1
      ? setIndex(projectsInfo.length - 1)
      : setIndex(index + 1);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100%",
        minHeight: "90vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-around" },
          minWidth: "80vw",
          width: { xs: "100%", md: "80%", lg: "90vw" },
          minHeight: "80vh",
          padding: "3%",
          background: "rgba( 255, 255, 255, 0.2 )",
          backdropFilter: "blur( 2px )",
          borderRadius: "10px",
        }}
      >
        <IconButton onClick={() => paginationLeft()}>
          <ArrowBackIosNewIcon fontSize="large" />
        </IconButton>
        <Link
          to={projectsInfo[index].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card sx={{ maxWidth: 450, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image={projectsInfo[index].img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {projectsInfo[index].name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {projectsInfo[index].description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <IconButton onClick={() => paginationRight()}>
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Projects;
