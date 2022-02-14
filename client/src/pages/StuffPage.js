import React from 'react'
import CreateUser from '../components/CreateUser'
import {MyUsers} from '../components/MyUsers'

export const StuffPage = () => {
  return(
    <div>

      <center><h5 className="head">Поставщики</h5></center>
      <CreateUser/>
      <MyUsers/>

    </div>
  )
}
