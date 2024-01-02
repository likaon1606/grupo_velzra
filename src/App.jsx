import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Nav from "./components/home/Nav";
import ModelBusiness from "./components/negocio/ModelBusiness";
import Service from "./components/servicio/Service";
import { Contact } from "./components/contacto/Contact";
import Nav2 from "./components/home/Nav2";

function App() {
  return (
    <>
      <Nav />
      <Nav2 />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route path="/modelodenegocio" element={<ModelBusiness />} />
        <Route path="/servicio" element={<Service />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
