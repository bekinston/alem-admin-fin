import React from 'react'
import Modal from '../components/Modal'



export const MainHeader = () => {

  const alertHandler = () => {

  }


  return(
    <div>
      <nav className=" z-depth-0">
        <div className="nav-wrapper white">
          <span className="logo">ä</span>
          <span className="brand-logo black-text center">älem</span>
            <ul id="nav-mobile" className="right">
              <li><Modal/></li>
            </ul>
          </div>
      </nav>
    </div>
  )
}
