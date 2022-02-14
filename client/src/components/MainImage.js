import React from 'react'
import platforms from '../images/mainimages/mockup.png'

export const MainImage = () => {
  return(
    <center><div className="mainimage">
      <center><h5 className="head2">Стриминговый маркетплейс</h5></center>
      <center><img src={platforms} className = "responsive-img"/></center>
      <center><h5 className="head2">Представленный на 5 платформах: IOS, Android, SmartTV, AndroidTV, AppleTV</h5></center>
    </div></center>
  )
}
