import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainFooter from './common/MainFooter'
import MainNav from './common/MainNav'
import Inicio from './pages/Inicio'
import Recetas from './pages/Recetas'
import Tienda from './pages/Tienda'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNav />
        <main id='main-content'>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="/tienda" element={<Tienda />} />
          </Routes>
        </main>
        <MainFooter />
      </BrowserRouter>
    </>
  )
}

export default App
