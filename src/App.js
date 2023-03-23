import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";


function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Skills" element={<Skills />} />
            <Route exact path="/Projects" element={<Projects />} />
            <Route exact path="/workExperience" element={<WorkExperience />} />
            {/* <Route exact path="/Galeria" element={<Gallery />} />
            <Route path="/Galeria/:id" element={ <ItemDetail /> } />
            <Route exact path="/Servicios" element={<Services />} />
            <Route exact path="/Nosotros" element={<About />} />
            <Route exact path="/Contacto" element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
