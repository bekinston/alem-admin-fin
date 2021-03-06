import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useARoutes} from './adminroutes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/Navbar'
import {AdminBar} from './components/AdminBar'
import {Loader} from './components/Loader'
import 'materialize-css'

function App() {
  const {token, login, logout, userId, ready, admin} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  const aroutes = useARoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  if(admin){
    console.log(admin)
    console.log(userId)

    return (
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated
      }}>
      <Router>
        {isAuthenticated &&  <AdminBar />}
        <div className = "container">
          {aroutes}
        </div>
      </Router>
      </AuthContext.Provider>
    )
  }



  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        { isAuthenticated && <Navbar /> }
        <div className="container">
          {routes}
        </div>
      </Router>

    </AuthContext.Provider>
  )
}

export default App
