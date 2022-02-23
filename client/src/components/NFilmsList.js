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
            </div>



                <div style={{marginTop:50}} className = "scrolling-wrapper">
                    { users.map((user, index) => {

                      let cost = parseInt(user.cost)
                      let buys = parseInt(user.buys)

                      let fdate = (user.enddate)
                      let sfdate = (user.startdate)

                      let xdate = ''

                      if (fdate == '01.01.1970'){
                        xdate = '-'
                      }else(
                        xdate = fdate
                      )

                      var nDate = fdate.split('.')
                      var nMonth = nDate[1]
                      var nDays = nDate[0]
                      var nYear = nDate[2]

                      let source = new Date(nYear, nMonth-1 ,nDays)
                      let current = new Date()

                      var daysLag = Math.ceil(Math.abs(current.getTime() - source.getTime()) / (1000 * 3600 * 24))

                      let xday = ''

                      if(daysLag > 90){
                         xday = "-"
                      }else{
                         xday = daysLag.toString()
                      }

                        return (
                          <>
                            <div className = "fcard1 z-depth-1">
                              <img src = {user.bannerhor} className="responsive-img banner center"/>
                              <p className="center">{user.name}</p>
                              <div className="purple lighten-5 center" style={{padding:10}}>
                                <p>Количество покупок</p>
                                <p>{user.buys}</p>
                              </div>
                              
                              <p style={{padding:10}}>Начало проката: {user.startdate}</p>
                              <p style={{padding:10}}>Конец проката: {user.enddate}</p>
                              <p style={{padding:10}}>Осталось дней: {xday}</p>
                              <p style={{padding:10}}>Количество покупок: {user.buys}</p>


                                <p style={{padding:10}}>Выручка: {(cost * buys).toLocaleString('ru')} тенге</p>

                                <p style={{padding:10}}>Комиссия сервиса: {((cost * buys * 0.185) + (buys*75)).toLocaleString('ru')} тенге</p>

                                <p style={{padding:10}}>Чистая прибыль: {((cost * buys) - ((cost * buys * 0.185) + (buys*75))).toLocaleString('ru')} тенге</p>

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
