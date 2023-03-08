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
          width: { xs: "100%", md: "80%", lg: "90vw" },
          minHeight: "80vh",
          background: "rgba( 255, 255, 255, 0.2 )",
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

export default Home;
