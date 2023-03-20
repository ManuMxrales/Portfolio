import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Fab from "@mui/material/Fab";
import AppsIcon from "@mui/icons-material/Apps";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GroupsIcon from "@mui/icons-material/Groups";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WorkIcon from "@mui/icons-material/Work";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  const navbarButtons = [
    { name: "Home", url: "/" },
    { name: "Skills", url: "/Skills" },
    { name: "Projects", url: "/Projects" },
    { name: "Contact", url: "/Contact" },
    { name: "TBD", url: "/Contacto" },
  ];
  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          display: { xs: "none", lg: "flex" },
          background: "rgba( 255, 255, 255, 0.2 )",
          backdropFilter: "blur( 4px )",
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {navbarButtons.map((text) => (
            <Link
              to={text.url}
              key={text.name}
              style={{ textDecoration: "none" }}
            >
              <Typography
                key={text.name}
                variant="h6"
                color="black"
                component="div"
              >
                {text.name}
              </Typography>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
      <Fab
        edge="start"
        aria-label="menu"
        sx={{
          display: { xs: "flex", lg: "none" },
          m: 1,
          p: 1,
          position: "fixed",
          top: "85%",
          left: "80%",
          zIndex: 5,
        }}
        onClick={() => setToggle(!toggle)}
      >
        <AppsIcon />
      </Fab>

      <Drawer anchor="bottom" open={toggle} onClose={() => setToggle(!toggle)}>
        <Box
          width="100%"
          height="30%"
          textAlign="center"
          role="presentation"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={1} columns={3} sx={{ width: "100%" }}>
            <Grid
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <IconButton
                  onClick={() => setToggle(!toggle)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <HomeIcon fontSize="large" />
                  <Typography variant="body" m={"5px"} color="white">
                    Home
                  </Typography>
                </IconButton>
              </Link>
            </Grid>
            <Grid
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Link to="/Skills" style={{ textDecoration: "none" }}>
                <IconButton
                  onClick={() => setToggle(!toggle)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <BuildIcon fontSize="large" />
                  <Typography variant="body" m={"5px"} color="white">
                    Skills
                  </Typography>
                </IconButton>
              </Link>
            </Grid>
            <Grid
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Link to="/Projects" style={{ textDecoration: "none" }}>
                <IconButton
                  onClick={() => setToggle(!toggle)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <WorkIcon fontSize="large" />
                  <Typography variant="body" m={"5px"} color="white">
                    Projects
                  </Typography>
                </IconButton>
              </Link>
            </Grid>
            <Grid
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Link to="/Nosotros" style={{ textDecoration: "none" }}>
                <IconButton
                  onClick={() => setToggle(!toggle)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <GroupsIcon fontSize="large" />
                  <Typography variant="body" m={"5px"} color="white">
                    Nosotros
                  </Typography>
                </IconButton>
              </Link>
            </Grid>
            <Grid
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Link to="/Contacto" style={{ textDecoration: "none" }}>
                <IconButton
                  onClick={() => setToggle(!toggle)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none",
                    boxShadow: "none",
                  }}
                >
                  <AlternateEmailIcon fontSize="large" />
                  <Typography variant="body" m={"5px"} color="white">
                    Contacto
                  </Typography>
                </IconButton>
              </Link>
            </Grid>
            <Grid
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <IconButton
                onClick={() => setToggle(!toggle)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textDecoration: "none",
                  boxShadow: "none",
                }}
              >
                <KeyboardArrowDownIcon fontSize="large" />
                <Typography variant="body" m={"5px"}>
                  Close
                </Typography>
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default NavBar;
