import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Nav from './components/home/Nav';
import Marcas from './components/marcas/Marcas';
import Proyectos from './components/proyectos/Proyectos';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marcas' element={<Marcas />} />
        <Route path='/proyectos' element={<Proyectos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
