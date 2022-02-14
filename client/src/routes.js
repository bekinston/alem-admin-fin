import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {AuthPage} from './pages/AuthPage'
import {CreatePage} from './pages/CreatePage'
import {FilmPage} from './pages/FilmPage'

export const useRoutes = isAuthenticated => {
  if(isAuthenticated){
    return(
      <Routes>
        <Route path="/films" element ={<FilmPage/>}/>
        <Route path="/create" element ={<CreatePage/>}/>
        <Route path="*" element={<Navigate to="/films"/>}/>
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
