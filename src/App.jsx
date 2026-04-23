import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './components/pages/login/login.jsx'
import Chat from './components/pages/chat/chat.jsx'
function App() {

  return (

      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />

      </Routes>

      </BrowserRouter>  

)}

export default App
