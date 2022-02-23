import React, {useContext} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const AdminBar = () => {
  const history = useNavigate()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper black z-depth-0">
        <span className="brand-logo left" style={{marginLeft:30}}>älem</span>
        <ul id="nav-mobile" className="right">
          <li><NavLink to="/specs">Статиста</NavLink></li>
          <li><NavLink to="/app">Приложение</NavLink></li>
          <li><NavLink to="/user">Поставщики</NavLink></li>
          <li><NavLink to="/exp">Фильмы</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}
