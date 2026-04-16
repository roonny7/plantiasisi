import { Footer } from './components/Plantilla/Footer'
import { Header } from './components/Plantilla/Header'
import { PaginaBlanco } from './components/Paginas/PaginaBlanco'
import { SideNav } from './components/Plantilla/SideNav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contenido } from './components/Paginas/Contenido'
import { NotFound } from './components/Plantilla/NotFound'
import { Formularios } from './components/Paginas/Formularios'
import { CatalogoODS } from './components/Catalogos/ODS'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header />
      <SideNav />     

      <Routes>
        <Route path="/" element={<Contenido />} />
        <Route path="/blanco" element={<PaginaBlanco />} />
        <Route path="/formularios" element={<Formularios />} />
        <Route path="/catalogos/ods/" element={<CatalogoODS />} />
        {/* Resto de páginas que no encuentre. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
