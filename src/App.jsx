import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './components/pages/login/login.jsx'
function App() {

  return (

      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />

      </Routes>

      </BrowserRouter>  

)}

export default App
