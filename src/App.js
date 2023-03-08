import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import Gallery from "./components/Gallery";
// import ItemDetail from "./components/ItemDetail";
// import Services from "./components/Servicios";
// import About from "./components/About";
// import Contact from "./components/Contact";

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
