import { Box } from "@mui/material";

const WorkExperience = () => {
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
          
        </Box>
      </Box>
    );
  };
  
  export default WorkExperience;