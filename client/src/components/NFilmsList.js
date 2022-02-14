import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'


export const NFilmsList = ({ users }) => {

  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()

  if (!users.length) {
   return <p className="center">Выложенных фильмов пока нет</p>
 }




  return (
      <div className = "row">
        <div className = "col s10 offset-s1">
          <div className = "card purple lighten-5">
            <div style={{padding:15}}>
              <p style={{marginTop:20}} className="left pcalc">Фильмы в прокате</p>
              <button className = "z-depth-1 login1-btn right">Обновить</button>
            </div>



                <div style={{marginTop:50}} className = "scrolling-wrapper">
                    { users.map((user, index) => {
                        return (
                          <>
                            <div className = "fcard z-depth-1">
                              <img src = {user.bannerhor} className="responsive-img banner center"/>
                              <p className="center">{user.name}</p>
                              <div className="purple lighten-5 center" style={{padding:10}}>
                                <p>Количество покупок</p>
                                <p>{user.buys}</p>
                              </div>
                              <p style={{padding:10}}>Промокод: {user.promo}</p>
                              <p style={{padding:10}}>Цена: {user.cost} тенге</p>
                              <div className="center">
                                <button className="login1-btn z-depth-1" style={{margin:20}} onClick={

                                    async()=>{
                                      const n = user.name
                                      const data = await request('/api/go/deletefilm', 'POST', {name:n})
                                      message(data.message)
                                      window.location.reload(false)
                                    }


                                  }>Снять</button>
                              </div>
                            </div>
                          </>
                        )
                        })}
                </div>


          </div>
        </div>
      </div>
  )
}
