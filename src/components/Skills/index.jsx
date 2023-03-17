import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const Skills = () => {
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
          flexDirection: "column",
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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            xs={2}
            sm={4}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "50%", sm: "30%", lg: "50%" },
                maxWidth: "100%",
              }}
              alt="Typescript"
              src="https://res.cloudinary.com/ddfoio9j1/image/upload/v1679081077/DevPortfolio/typescript_taggnt.png"
            />
          </Grid>
          <Grid
            xs={2}
            sm={4}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "50%", sm: "30%", lg: "50%" },
                maxWidth: "100%",
              }}
              alt="Javascript"
              src="https://res.cloudinary.com/ddfoio9j1/image/upload/v1679080932/DevPortfolio/js_pqgdgu.png"
            />
          </Grid>
          <Grid
            xs={2}
            sm={4}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "50%", sm: "30%", lg: "50%" },
                maxWidth: "100%",
              }}
              alt="NodeJS"
              src="https://res.cloudinary.com/ddfoio9j1/image/upload/v1679081166/DevPortfolio/node-js_dl5fce.png"
            />
          </Grid>
          <Grid
            xs={2}
            sm={4}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "50%", sm: "30%", lg: "50%" },
                maxWidth: "100%",
              }}
              alt="HTML"
              src="https://res.cloudinary.com/ddfoio9j1/image/upload/v1679081272/DevPortfolio/html_xreu7e.png"
            />
          </Grid>
          <Grid
            xs={2}
            sm={4}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "50%", sm: "30%", lg: "50%" },
                maxWidth: "100%",
              }}
              alt="CSS"
              src="https://res.cloudinary.com/ddfoio9j1/image/upload/v1679081343/DevPortfolio/css-3_yb1dco.png"
            />
          </Grid>
          <Grid
            xs={2}
            sm={4}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "50%", sm: "30%", lg: "50%" },
                maxWidth: "100%",
              }}
              alt="React"
              src="https://res.cloudinary.com/ddfoio9j1/image/upload/v1679081432/DevPortfolio/physics_xro92x.png"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
