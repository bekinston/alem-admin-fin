import React from 'react'


export const MyFilmsList = ({ users }) => {


  return (
    <div className = "row">

            {users.map((user, index) => {



              let cost = parseInt(user.cost)
              let buys = parseInt(user.buys)

              var nDate =(user.enddate).split('.')
              var nMonth = nDate[1]
              var nDays = nDate[0]
              var nYear = nDate[2]




              let source = new Date(nYear, nMonth-1 ,nDays)
              let current = new Date()

              var daysLag = Math.ceil(Math.abs(current.getTime() - source.getTime()) / (1000 * 3600 * 24))
              





              return (
                <>
                <div className = "col s8 card offset-s2 " style = {{padding:20, borderRadius:10}}>

                  <div className = "col s12 l3 m4 center">

                    <p className = "pfilms">{user.name} <svg height="10" width="10">
                      <circle cx="5" cy="5" r="5" className = {user.state}/>
                      </svg>
                    </p>

                    <img src = {user.bannerhor} className="responsive-img"/>
                    <p className = "efilms"><span className="hfilms">Дата начала проката: </span> {user.startdate}</p>
                    <p className = "efilms"><span className="hfilms">Дата конца проката: </span>{user.enddate}</p>
                    <p className = "efilms"><span className="hfilms">Осталось дней: </span> {daysLag}</p>
                  </div>






                    <div className = "col s12 l6 m4 center" style = {{marginTop:45}}>
                      <span className = "hfilms">Количество покупок</span>
                      <p className = "efilms">{buys}</p>
                      <span className = "hfilms">Выручка</span>
                      <p className = "efilms">{(cost * buys).toLocaleString('ru')} тенге</p>
                      <span className = "hfilms">Комиссия сервиса</span>
                      <p className = "efilms">{((cost * buys * 0.185) + (buys*75)).toLocaleString('ru')} тенге</p>
                      <span className = "hfilms">Чистая прибыль</span>
                      <p className = "efilms">{((cost * buys) - ((cost * buys * 0.185) + (buys*75))).toLocaleString('ru')} тенге</p>
                    </div>

                    <div className = "col s12 l3 m4 center" style = {{marginTop:35}}>
                      <p className = "pfilms">цена</p>
                      <p>{user.cost} тенге</p>
                      <p className = "pfilms">Рейтинг</p>
                      <p>0.0</p>
                    </div>










                </div>
                  </>
              )
            }) }

    </div>

  )
}
