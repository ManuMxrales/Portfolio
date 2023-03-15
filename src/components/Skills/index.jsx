import React from "react";
import { Typography, Box } from "@mui/material";
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
          justifyContent: "space-between",
          minWidth: "80vw",
          width: { xs: "100%", md: "80%", lg: "90vw" },
          minHeight: "80vh",
          background: "rgba( 255, 255, 255, 0.2 )",
          backdropFilter: "blur( 2px )",
          borderRadius: "10px",
          padding: "3%",
        }}
      >
        <Typography variant="h2" align="center" sx={{ m: 1, color: "black" }}>
          Fco. Manuel Sanchez
        </Typography>
        <Typography variant="body" align="center" sx={{ color: "black" }}>
          "FrontEnd Developer"
        </Typography>
        <Typography variant="subtitle" align="center" sx={{ color: "black" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          temporibus distinctio ducimus sed quo. Ullam corrupti ipsa perferendis
          iure facere dolores excepturi voluptatum architecto, soluta minima,
          veritatis reprehenderit modi magni?
        </Typography>
        <Typography variant="body" align="center" sx={{ color: "black" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          temporibus distinctio ducimus sed quo. Ullam corrupti ipsa perferendis
          iure facere dolores excepturi voluptatum architecto, soluta minima,
          veritatis reprehenderit modi magni?
        </Typography>
      </Box>
    </Box>
  );
};

export default Skills;
