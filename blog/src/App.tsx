import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import './App.css'

const App: React.FC = () => {
      return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Navigate to='/Home' />}></Route>
              <Route path='/Home' element={<Home />}>
              </Route>
              <Route path='/Admin' element={<Admin />}>
              </Route>
            </Routes>
        </BrowserRouter>    
      )
}


export default App
