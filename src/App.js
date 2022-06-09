import "./App.scss";
import "bootstrap/scss/bootstrap.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Contact from "./Components/Contact/Contact";
import Inscriptions from "./Components/Inscriptions/Inscriptions";
import TheGarden from "./Components/TheGarden/TheGarden";
import Information from "./Components/Information/Information";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Kinder-Garden-App/" element={<Main />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/inscripcion" element={<Inscriptions />} />
        <Route path="/jardin" element={<TheGarden />} />
        <Route path="/informacion" element={<Information />} />
        <Route path="/galeria" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
