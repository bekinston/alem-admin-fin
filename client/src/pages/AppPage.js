import React from 'react'
import NFilms from '../components/NFilms'
import NSoon from '../components/NSoon'
import {GoFilms} from '../components/GoFilms'
import {GoSoons} from '../components/GoSoons'

export const AppPage = () => {
  return(
    <div>
      <center><h5 className="head">Приложение</h5></center>
      <NFilms/>
      <GoFilms/>
      <NSoon/>
      <GoSoons/>
    </div>
  )
}
