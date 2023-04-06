import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import  Register  from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute';
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import ApplyDoctor from './pages/ApplyDoctor/ApplyDoctor';
import Notifications from './pages/Notifications/Notifications'
import Doctors from './pages/Admin/Doctors'
import Users from './pages/Admin/Users'

function App() {
  const {loading} = useSelector((state: RootState) => state.alerts)

  return (
    <>
    {loading ? 'Loading...' :
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/login' 
            element={
              <PublicRoute>
                <Login/>
              </PublicRoute>
            }
          />
          <Route
            path='/register'
            element={<Register/>}
          />
          <Route
            path='/apply-doctor'
            element={
              <ProtectedRoute>
                <ApplyDoctor/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/notifications'
            element={
              <ProtectedRoute>
                <Notifications/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/doctors'
            element={
              <ProtectedRoute>
                <Doctors/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/users'
            element={
              <ProtectedRoute>
                <Users/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>    
    }
    </>
  )
}

export default App
