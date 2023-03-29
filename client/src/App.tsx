import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import  Register  from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute';
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

function App() {
  const {loading} = useSelector((state: RootState) => state.alerts)

  return (
    <>
    {loading ? 'Loading...' :
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
          }/>
          <Route path='/login' element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
          }/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>    
    }
    </>
  )
}

export default App
