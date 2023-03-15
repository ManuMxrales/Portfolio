import React from "react";
import { Typography, Box } from "@mui/material";

const Home = () => {
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
          justifyContent: "space-between",
          minWidth: "80vw",
          width: { xs: "100%" },
          minHeight: "80vh",
          background: "rgba( 255, 255, 255, 0.1 )",
          backdropFilter: "blur( 2px )",
          borderRadius: "10px",
          padding: "3%",
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "50%", sm: "30%", lg: "20%" },
            maxWidth: "100%",
            borderRadius: "50%",
          }}
          alt="Manu Profile Picture"
          src="https://res.cloudinary.com/ddfoio9j1/image/upload/v1677799519/DevPortfolio/47C11E73-6F26-40BB-925C-035AAA068DBF_1_105_c_fqs6nk.jpg"
        />
        <Typography
          variant="h2"
          align="center"
          sx={{ m: 1, color: "black", fontFamily: "inherit" }}
        >
          Fco. Manuel Sanchez
        </Typography>
        <Typography
          variant="overline"
          align="center"
          sx={{
            m: 1,
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "800",
            fontFamily: "inherit",
          }}
        >
          💻 Web Developer 💻
        </Typography>
        <Box
          sx={{
            background: "rgba( 255, 255, 255, 0.5 )",
            padding: { xs: "3%", md: "20px" },
            backdropFilter: "blur( 4px )",
          }}
        >
          <Typography
            variant="body"
            align="justify"
            sx={{ color: "black", fontFamily: "inherit", fontWeight: "800" }}
          >
            Soy un desarrollador web con experiencia en la creación de sitios
            web personalizados y aplicaciones web a la medida para clientes en
            diversas industrias.👨🏻‍🚀 Me apasiona el diseño web 🌱 y estoy siempre
            buscando formas de mejorar la experiencia del usuario. Me
            especializo en lenguajes de programación como JavaScript y
            TypeScript.🎯
          </Typography>
        </Box>
        <Box
          sx={{
            background: "rgba( 0, 0, 0, 1 )",
            padding: { xs: "3%", md: "5px" },
            m: 1,
            width: "100%",
          }}
        >
          <Typography
            variant="overline"
            align="justify"
            sx={{ color: "white" }}
          >
            Los problemas son oportunidades para demostrar lo que somos capaces
            de hacer.🪴
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
