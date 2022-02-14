import React, {useContext} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
  const history = useNavigate()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper z-depth-0 black">
        <span className="white-text brand-logo">älem</span>
        <ul id=" nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">Создать фильм</NavLink></li>
          <li><NavLink to="/films">Мои фильмы</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}
