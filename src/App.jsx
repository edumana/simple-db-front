import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './screens/Home'
import Auth from './screens/Auth'
import AllowAdmin from './components/AllowAdmin'
import * as adminTokenService from './services/adminTokenService.js'
import { useEffect, useState } from 'react'
import * as adminAuthService from './services/adminAuthService'
import ClinicianMap from './screens/ClinicianMap'
import InterHome from './screens/InterHome'

function App() {

  const navigate = useNavigate()
  const [admin, setAdmin] = useState(adminTokenService.getAdminFromToken())
  const [authStatus, setAuthStatus] = useState('Login or Signup')

  function handleLoginOrSignup(email, password, action) {

    if (action === 'signup') {

      adminAuthService.signup({ email: email, password: password })
        .then(newUser => {
          setAdmin(adminTokenService.getAdminFromToken())
        })
        .catch(err => {
          setAuthStatus(err)
          console.error(err)
        })

    } else if (action === 'login') {

      adminAuthService.login({ email: email, password: password })
        .then(token => {
          setAdmin(adminTokenService.getAdminFromToken())
        })
        .catch(err => {
          setAuthStatus(err)
          console.error(err)
        })

    } else {
      setAuthStatus('Undefined user input/error')
      console.log('Undefined user input/error')
    }
  }

  function handleLogout() {
    setAdmin(adminTokenService.removeAdminToken())
  }

  // useEffect(() => {
  //   if (admin) {
  //     navigate('/home')
  //   } else {
  //     setAuthStatus('Login or Signup')
  //   }
  // }, [admin, navigate])

  return (
    <Routes>
      <Route
        path='/'
        element={<InterHome />}
      />


      {/* <Route
         path='/'
         element={<ClinicianMap/>}
       /> */}


      {/* <Route
        path='/'
        element={
          <Auth handleLoginOrSignup={handleLoginOrSignup} authStatus={authStatus} />
        }
      />
      <Route
        path='/home'
        element={
          <AllowAdmin admin={admin}>
            <Home handleLogout={handleLogout} admin={admin}/>
          </AllowAdmin>
      }
      /> */}
    </Routes>
  );
}

export default App;