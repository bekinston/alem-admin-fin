import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {SpecsPage} from './pages/SpecsPage'
import {AppPage} from './pages/AppPage'
import {StuffPage} from './pages/StuffPage'
import {AuthPage} from './pages/AuthPage'
import {ExpFilms} from './pages/ExpFilms'

export const useARoutes = isAuthenticated => {
  if(isAuthenticated){
    return(
      <Routes>
        <Route path="/app" element ={<AppPage/>}/>
        <Route path="/user" element ={<StuffPage/>}/>
        <Route path="/specs" element ={<SpecsPage/>}/>
        <Route path="/exp" element ={<ExpFilms/>}/>
        <Route path="*" element={<Navigate to="/specs"/>}/>
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/" element ={<AuthPage/>}/>
      <Route path="*" element={<Navigate to=""/>}/>
    </Routes>
  )
}
