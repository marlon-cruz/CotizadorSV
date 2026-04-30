import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './components/pages/login/login.jsx'
import Chat from './components/pages/chat/chat.jsx'
import Caracteristicas from './components/common/caracteristicas/caracteristicas.jsx'
function App() {

  return (

      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/" element={<Caracteristicas />} />

      </Routes>

      </BrowserRouter>  

)}

export default App
