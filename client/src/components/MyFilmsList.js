import React from 'react'


export const MyFilmsList = ({ users }) => {


  return (
    <div className = "row">

            {users.map((user, index) => {

              let cost = parseInt(user.cost);
              let buys = parseInt(user.buys);

              return (
                <>
                <div className = "col s12 card" style = {{padding:10}}>

                  <p className = "pfilms">{user.name}</p>

                    <div className = "col s3">
                      <img src = {user.bannerhor} style = {{width:150, marginTop:20}}/>
                    </div>

                    <div className = "col s3">
                      <p className = "pfilms">Количество покупок</p>
                      <p>{buys}</p>
                      <p className = "pfilms">Выручка</p>
                      <p>{(cost * buys).toLocaleString('ru')} тенге</p>
                      <p className = "pfilms">Комиссия сервиса</p>
                      <p>{((cost * buys * 0.185) + (buys*75)).toLocaleString('ru')} тенге</p>
                      <p className = "pfilms">Чистая прибыль</p>
                      <p>{((cost * buys) - ((cost * buys * 0.185) + (buys*75))).toLocaleString('ru')} тенге</p>
                    </div>

                    <div className = "col s3">
                      <p className = "pfilms">Промокод</p>
                      <p>{user.promo}</p>
                    </div>

                    <div className = "col s3">
                      <p className = "pfilms">Цена</p>
                      <p>{user.cost} тенге</p>
                    </div>




                </div>
                  </>
              )
            }) }

    </div>

  )
}
