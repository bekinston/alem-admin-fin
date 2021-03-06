import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'


export const NSoonList= ({ users }) => {

  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()

  if (!users.length) {
   return <p className="center">Выложенных новостей пока нет</p>
 }


  return (
      <div className = "row">
        <div className = "col s10 offset-s1">
          <div className = "card green lighten-5">
            <div style={{padding:15}}>
              <p style={{marginTop:20}} className="left pcalc">Блоки «интересное»</p>
            </div>


            <div style={{marginTop:50}} className = "scrolling-wrapper">
                { users.map((user, index) => {
                    return (
                      <>
                        <div className = "fcard1 z-depth-1">
                          <img src = {user.logo} className="responsive-img banner center"/>
                          <p className="center">название:  {user.name}</p>
                          <div className="green lighten-5 center" style={{padding:10}}>
                            <p>описание: {user.desc}</p>
                          </div>
                          <div className="center">
                            <button className="login1-btn z-depth-1" style={{margin:20}} onClick={
                                async()=>{
                                    const n=user._id
                                  const data = await request('/api/soon/deletesoon', 'POST', {_id:n})
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
